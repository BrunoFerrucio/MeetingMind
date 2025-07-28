import type { ApiResponse } from '../types/api';
import { corsHandler } from './cors';
import { AuthService } from '../services/auth';
import { z } from 'zod';

export class ResponseHelper {
  /**
   * Create a success response with proper CORS headers
   */
  static success<T>(data: T, message?: string, request?: Request): Response {
    const response: ApiResponse<T> = {
      success: true,
      data,
      message
    };
    
    const baseResponse = new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Add CORS headers if request is provided
    if (request) {
      return corsHandler.addCorsHeaders(baseResponse, request);
    }

    return baseResponse;
  }

  /**
   * Create an error response with proper CORS headers
   */
  static error(message: string, status: number = 400, request?: Request): Response {
    const response: ApiResponse = {
      success: false,
      error: message
    };
    
    const baseResponse = new Response(JSON.stringify(response), {
      status,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Add CORS headers if request is provided
    if (request) {
      return corsHandler.addCorsHeaders(baseResponse, request);
    }

    return baseResponse;
  }

  /**
   * Create a not found response
   */
  static notFound(message: string = 'Resource not found', request?: Request): Response {
    return this.error(message, 404, request);
  }

  /**
   * Create a server error response
   */
  static serverError(message: string = 'Internal server error', request?: Request): Response {
    return this.error(message, 500, request);
  }

  /**
   * Handle CORS preflight requests
   */
  static cors(request: Request): Response {
    return corsHandler.handlePreflight(request);
  }

  /**
   * Handle authentication errors
   */
  static unauthorized(message: string = 'Unauthorized access', request?: Request): Response {
    return this.error(message, 401, request);
  }

  /**
   * Handle forbidden access
   */
  static forbidden(message: string = 'Forbidden access', request?: Request): Response {
    return this.error(message, 403, request);
  }

  /**
   * Handle validation errors from Zod
   */
  static validationError(error: z.ZodError, request?: Request): Response {
    const message = error.issues.map(issue => 
      `${issue.path.join('.')}: ${issue.message}`
    ).join(', ');

    return this.error(`Validation failed: ${message}`, 400, request);
  }

  /**
   * Middleware to handle authentication for protected routes
   */
  static withAuth<T extends any[]>(
    handler: (req: Request, ...args: T) => Promise<Response> | Response
  ) {
    return async (req: Request, ...args: T): Promise<Response> => {
      const authResult = AuthService.authenticate(req);
      
      if (!authResult.isValid) {
        return this.unauthorized(authResult.error, req);
      }
      
      return handler(req, ...args);
    };
  }
}
