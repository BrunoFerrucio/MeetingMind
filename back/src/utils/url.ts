import { z } from 'zod';
import type { RouteParams, QueryParams } from '../types/api';

// Schema para validar query parameters
export const QueryParamsSchema = z.record(z.string(), z.union([
  z.string(),
  z.array(z.string())
]));

// Schema para validar route parameters
export const RouteParamsSchema = z.record(z.string(), z.string());

// Schema para validar uma URL completa
export const UrlSchema = z.object({
  pathname: z.string(),
  params: QueryParamsSchema
});

export type ParsedUrl = z.infer<typeof UrlSchema>;

export class UrlHelper {
  /**
   * Parse URL with Zod validation
   */
  static parseUrl(url: string): ParsedUrl {
    try {
      const urlObject = new URL(url);
      const params: QueryParams = {};
      
      urlObject.searchParams.forEach((value, key) => {
        const existing = params[key];
        if (existing) {
          if (Array.isArray(existing)) {
            existing.push(value);
          } else {
            params[key] = [existing, value];
          }
        } else {
          params[key] = value;
        }
      });
      
      const result = {
        pathname: urlObject.pathname,
        params
      };

      // Validate with Zod
      return UrlSchema.parse(result);
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new Error(`Invalid URL format: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Match route with Zod validation
   */
  static matchRoute(pattern: string, pathname: string): { matches: boolean; params: RouteParams } {
    const patternParts = pattern.split('/').filter(Boolean);
    const pathnameParts = pathname.split('/').filter(Boolean);
    
    if (patternParts.length !== pathnameParts.length) {
      return { matches: false, params: {} };
    }
    
    const params: Record<string, string> = {};
    
    for (let i = 0; i < patternParts.length; i++) {
      const patternPart = patternParts[i];
      const pathnamePart = pathnameParts[i];
      
      if (!patternPart || !pathnamePart) {
        return { matches: false, params: {} };
      }
      
      if (patternPart.startsWith(':')) {
        // Dynamic route parameter
        const paramName = patternPart.slice(1);
        params[paramName] = pathnamePart;
      } else if (patternPart !== pathnamePart) {
        // Static route part doesn't match
        return { matches: false, params: {} };
      }
    }
    
    try {
      // Validate route params with Zod
      const validatedParams = RouteParamsSchema.parse(params);
      return { matches: true, params: validatedParams };
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error('Invalid route parameters:', error.message);
        return { matches: false, params: {} };
      }
      throw error;
    }
  }

  /**
   * Validate query parameters against a custom schema
   */
  static validateQueryParams<T>(params: QueryParams, schema: z.ZodSchema<T>): T {
    return schema.parse(params);
  }

  /**
   * Create a schema for specific route parameters
   */
  static createRouteSchema<T extends Record<string, z.ZodType>>(shape: T) {
    return z.object(shape);
  }
}

// Schemas comuns para validação
export const UserRouteParamsSchema = z.object({
  id: z.string().uuidv4('Invalid user ID format')
});

export const PaginationQuerySchema = z.object({
  page: z.string().transform(val => parseInt(val, 10)).pipe(z.number().min(1)).optional(),
  limit: z.string().transform(val => parseInt(val, 10)).pipe(z.number().min(1).max(100)).optional(),
  sort: z.enum(['asc', 'desc']).optional()
});
