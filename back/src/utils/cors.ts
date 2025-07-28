import { z } from 'zod';
import { config, isDevelopment } from '../config/environment';

export const CorsConfigSchema = z.object({
  origin: z.union([
    z.string(),
    z.array(z.string()),
    z.boolean()
  ]).default('*'),
  methods: z.array(z.string()).default(['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']),
  allowedHeaders: z.array(z.string()).default(['Content-Type', 'Authorization']),
  exposedHeaders: z.array(z.string()).optional(),
  credentials: z.boolean().default(true),
  maxAge: z.number().optional(),
  optionsSuccessStatus: z.number().default(204)
});

export type CorsConfig = z.infer<typeof CorsConfigSchema>;

export class CorsHandler {
  private config: CorsConfig;

  constructor(config: Partial<CorsConfig> = {}) {
    this.config = CorsConfigSchema.parse(config);
  }

  /**
   * Check if origin is allowed
   */
  private isOriginAllowed(origin: string): boolean {
    const { origin: allowedOrigin } = this.config;

    if (allowedOrigin === true) {
      return true;
    }

    if (allowedOrigin === false) {
      return false;
    }

    if (typeof allowedOrigin === 'string') {
      return allowedOrigin === '*' || origin === allowedOrigin;
    }

    if (Array.isArray(allowedOrigin)) {
      return allowedOrigin.includes(origin);
    }

    return false;
  }

  /**
   * Get CORS headers for a request
   */
  getCorsHeaders(request: Request): Record<string, string> {
    const headers: Record<string, string> = {};
    const origin = request.headers.get('Origin');

    // Handle origin
    if (origin && this.isOriginAllowed(origin)) {
      headers['Access-Control-Allow-Origin'] = origin;
    } else if (this.config.origin === '*' || this.config.origin === true) {
      headers['Access-Control-Allow-Origin'] = '*';
    }

    // Handle credentials
    if (this.config.credentials) {
      headers['Access-Control-Allow-Credentials'] = 'true';
      // If credentials are true, origin cannot be '*'
      if (headers['Access-Control-Allow-Origin'] === '*') {
        delete headers['Access-Control-Allow-Origin'];
        if (origin) {
          headers['Access-Control-Allow-Origin'] = origin;
        }
      }
    }

    // Handle methods (for preflight)
    if (request.method === 'OPTIONS') {
      headers['Access-Control-Allow-Methods'] = this.config.methods.join(', ');
    }

    // Handle headers (for preflight)
    if (request.method === 'OPTIONS' && this.config.allowedHeaders.length > 0) {
      headers['Access-Control-Allow-Headers'] = this.config.allowedHeaders.join(', ');
    }

    // Handle exposed headers
    if (this.config.exposedHeaders && this.config.exposedHeaders.length > 0) {
      headers['Access-Control-Expose-Headers'] = this.config.exposedHeaders.join(', ');
    }

    // Handle max age (for preflight)
    if (request.method === 'OPTIONS' && this.config.maxAge !== undefined) {
      headers['Access-Control-Max-Age'] = this.config.maxAge.toString();
    }

    return headers;
  }

  /**
   * Handle preflight request
   */
  handlePreflight(request: Request): Response {
    const headers = this.getCorsHeaders(request);
    
    return new Response(null, {
      status: this.config.optionsSuccessStatus,
      headers
    });
  }

  /**
   * Add CORS headers to an existing response
   */
  addCorsHeaders(response: Response, request: Request): Response {
    const corsHeaders = this.getCorsHeaders(request);
    const headers = new Headers(response.headers);
    
    Object.entries(corsHeaders).forEach(([key, value]) => {
      headers.set(key, value as string);
    });

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers
    });
  }
}

// Configurações baseadas no ambiente
export function createCorsConfig(): Partial<CorsConfig> {
  if (isDevelopment) {
    return {
      origin: true, // Permite qualquer origem em desenvolvimento
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
      allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
      maxAge: 86400
    };
  } else {
    return {
      origin: config.ALLOWED_ORIGIN, // Apenas a origem configurada em produção
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      maxAge: 86400
    };
  }
}

// Instância global do CORS handler
export const corsHandler = new CorsHandler(createCorsConfig());
