import type { Route } from '../types/api';
import { ResponseHelper } from '../utils/response';
import { UrlHelper } from '../utils/url';
import { routeRegistry, type RouteDocumentation } from './documentation';

export class Router {
  private routes: Route[] = [];

  private addRouteWithDocs(route: Route, doc?: Partial<RouteDocumentation>): void {
    this.routes.push(route);
    
    // Register documentation if provided
    if (doc) {
      const routeKey = `${route.method}:${route.path}`;
      routeRegistry.register(routeKey, {
        method: route.method,
        path: route.path,
        description: doc.description || `${route.method} ${route.path}`,
        auth: doc.auth || false,
        tags: doc.tags || [],
        parameters: doc.parameters,
        requestBody: doc.requestBody,
        responses: doc.responses || {
          '200': { description: 'Success' },
          '400': { description: 'Bad Request' },
          '500': { description: 'Internal Server Error' }
        }
      });
    }
  }

  addRoute(route: Route, doc?: Partial<RouteDocumentation>): void {
    this.addRouteWithDocs(route, doc);
  }

  get(path: string, handler: Route['handler'], doc?: Partial<RouteDocumentation>): void {
    this.addRouteWithDocs({ method: 'GET', path, handler }, doc);
  }

  post(path: string, handler: Route['handler'], doc?: Partial<RouteDocumentation>): void {
    this.addRouteWithDocs({ method: 'POST', path, handler }, doc);
  }

  put(path: string, handler: Route['handler'], doc?: Partial<RouteDocumentation>): void {
    this.addRouteWithDocs({ method: 'PUT', path, handler }, doc);
  }

  delete(path: string, handler: Route['handler'], doc?: Partial<RouteDocumentation>): void {
    this.addRouteWithDocs({ method: 'DELETE', path, handler }, doc);
  }

  patch(path: string, handler: Route['handler'], doc?: Partial<RouteDocumentation>): void {
    this.addRouteWithDocs({ method: 'PATCH', path, handler }, doc);
  }

  async handleRequest(req: Request): Promise<Response> {
    try {
      // Handle CORS preflight
      if (req.method === 'OPTIONS') {
        return ResponseHelper.cors(req);
      }

      const { pathname } = UrlHelper.parseUrl(req.url);

      for (const route of this.routes) {
        if (req.method === route.method) {
          const { matches, params } = UrlHelper.matchRoute(route.path, pathname);
          
          if (matches) {
            // Add route params to request for access in handlers
            (req as any).params = params;
            
            try {
              return await route.handler(req);
            } catch (error) {
              console.error('Route handler error:', error);
              return ResponseHelper.serverError(
                error instanceof Error ? error.message : 'Unknown error occurred',
                req
              );
            }
          }
        }
      }

      return ResponseHelper.notFound('Route not found', req);
    } catch (error) {
      console.error('Router error:', error);
      return ResponseHelper.serverError(
        'Internal router error',
        req
      );
    }
  }

  /**
   * Get all registered routes for logging
   */
  getRoutes(): Route[] {
    return [...this.routes];
  }
}
