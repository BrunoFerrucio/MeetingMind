import type { Route } from '../types/api';
import { ResponseHelper } from '../utils/response';
import { UrlHelper } from '../utils/url';

export class Router {
  private routes: Route[] = [];

  addRoute(route: Route): void {
    this.routes.push(route);
  }

  get(path: string, handler: Route['handler']): void {
    this.addRoute({ method: 'GET', path, handler });
  }

  post(path: string, handler: Route['handler']): void {
    this.addRoute({ method: 'POST', path, handler });
  }

  put(path: string, handler: Route['handler']): void {
    this.addRoute({ method: 'PUT', path, handler });
  }

  delete(path: string, handler: Route['handler']): void {
    this.addRoute({ method: 'DELETE', path, handler });
  }

  patch(path: string, handler: Route['handler']): void {
    this.addRoute({ method: 'PATCH', path, handler });
  }

  async handleRequest(req: Request): Promise<Response> {
    // Handle CORS preflight
    if (req.method === 'OPTIONS') {
      return ResponseHelper.cors();
    }

    const { pathname } = UrlHelper.parseUrl(req.url);

    for (const route of this.routes) {
      if (req.method === route.method) {
        const { matches, params } = UrlHelper.matchRoute(route.path, pathname);
        
        if (matches) {
          try {
            // Add route params to request for access in handlers
            (req as any).params = params;
            return await route.handler(req);
          } catch (error) {
            console.error('Route handler error:', error);
            return ResponseHelper.serverError('Internal server error');
          }
        }
      }
    }

    return ResponseHelper.notFound('Route not found');
  }
}
