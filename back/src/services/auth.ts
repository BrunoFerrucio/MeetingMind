import { z } from 'zod';
import { config } from '../config/environment';

// Schema para validar header de autenticação
const AuthHeaderSchema = z.object({
  authorization: z.string().min(1, 'Authorization header is required')
});

export class AuthService {
  private static readonly BEARER_PREFIX = 'Bearer ';

  /**
   * Valida se o token de autenticação é válido
   */
  static validateToken(token: string): boolean {
    // Remove o prefixo "Bearer " se presente
    const cleanToken = token.startsWith(this.BEARER_PREFIX) 
      ? token.slice(this.BEARER_PREFIX.length)
      : token;

    // Validação simples por agora (você pode implementar JWT aqui)
    return cleanToken === config.API_SECRET_KEY;
  }

  /**
   * Extrai e valida o token do header Authorization
   */
  static extractTokenFromHeaders(headers: Headers): string | null {
    const authHeader = headers.get('authorization');
    
    if (!authHeader) {
      return null;
    }

    try {
      const validated = AuthHeaderSchema.parse({ authorization: authHeader });
      return validated.authorization;
    } catch {
      return null;
    }
  }

  /**
   * Middleware de autenticação para rotas protegidas
   */
  static authenticate(request: Request): { isValid: boolean; error?: string } {
    const token = this.extractTokenFromHeaders(request.headers);

    if (!token) {
      return {
        isValid: false,
        error: 'Missing Authorization header. Expected format: "Authorization: Bearer <token>"'
      };
    }

    if (!this.validateToken(token)) {
      return {
        isValid: false,
        error: 'Invalid or expired token'
      };
    }

    return { isValid: true };
  }

  /**
   * Gera um token simples (você pode substituir por JWT)
   */
  static generateToken(): string {
    return config.API_SECRET_KEY;
  }
}

// Schema para rotas que precisam de autenticação
export const AuthenticatedRequestSchema = z.object({
  headers: z.object({
    authorization: z.string().min(1)
  })
});
