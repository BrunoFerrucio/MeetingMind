import { z } from 'zod';

// Interface para documentação de uma rota
export interface RouteDocumentation {
  method: string;
  path: string;
  description: string;
  tags?: string[];
  auth: boolean;
  parameters?: {
    path?: Record<string, {
      type: string;
      description: string;
      required: boolean;
      example?: any;
    }>;
    query?: Record<string, {
      type: string;
      description: string;
      required: boolean;
      example?: any;
    }>;
  };
  requestBody?: {
    description: string;
    schema: any;
    example?: any;
  };
  responses: {
    [statusCode: string]: {
      description: string;
      example?: any;
    };
  };
}

// Registry para armazenar documentação das rotas
class RouteDocumentationRegistry {
  private routes: Map<string, RouteDocumentation> = new Map();

  register(routeKey: string, doc: RouteDocumentation) {
    this.routes.set(routeKey, doc);
  }

  getAll(): RouteDocumentation[] {
    return Array.from(this.routes.values());
  }

  getByTag(tag: string): RouteDocumentation[] {
    return this.getAll().filter(route => route.tags?.includes(tag));
  }

  generateOpenApiSpec() {
    const routes = this.getAll();
    const paths: any = {};

    routes.forEach(route => {
      if (!paths[route.path]) {
        paths[route.path] = {};
      }

      const operation: any = {
        summary: route.description,
        tags: route.tags || [],
        parameters: [],
        responses: {}
      };

      // Add auth requirement
      if (route.auth) {
        operation.security = [{ bearerAuth: [] }];
      }

      // Add path parameters
      if (route.parameters?.path) {
        Object.entries(route.parameters.path).forEach(([name, param]) => {
          operation.parameters.push({
            name,
            in: 'path',
            required: param.required,
            description: param.description,
            schema: { type: param.type },
            example: param.example
          });
        });
      }

      // Add query parameters
      if (route.parameters?.query) {
        Object.entries(route.parameters.query).forEach(([name, param]) => {
          operation.parameters.push({
            name,
            in: 'query',
            required: param.required,
            description: param.description,
            schema: { type: param.type },
            example: param.example
          });
        });
      }

      // Add request body
      if (route.requestBody) {
        operation.requestBody = {
          description: route.requestBody.description,
          required: true,
          content: {
            'application/json': {
              schema: route.requestBody.schema,
              example: route.requestBody.example
            }
          }
        };
      }

      // Add responses
      Object.entries(route.responses).forEach(([statusCode, response]) => {
        operation.responses[statusCode] = {
          description: response.description,
          content: {
            'application/json': {
              example: response.example
            }
          }
        };
      });

      paths[route.path][route.method.toLowerCase()] = operation;
    });

    return {
      openapi: '3.0.0',
      info: {
        title: 'MeetingMind API',
        version: '1.0.0',
        description: 'API documentation for MeetingMind application'
      },
      servers: [
        {
          url: `http://localhost:${Bun.env.PORT}`,
          description: 'Development server'
        }
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            description: 'JWT token authentication'
          }
        }
      },
      paths
    };
  }
}

export const routeRegistry = new RouteDocumentationRegistry();

// Decorator para documentar rotas
export function DocumentRoute(doc: Omit<RouteDocumentation, 'method' | 'path'>) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // Esta função será chamada quando a rota for registrada
    const routeKey = `${target.constructor.name}.${propertyKey}`;
    
    // Registra a documentação (method e path serão adicionados quando a rota for registrada)
    routeRegistry.register(routeKey, {
      method: 'GET', // Default, será sobrescrito
      path: '/', // Default, será sobrescrito
      ...doc
    });
    
    return descriptor;
  };
}

// Helper para gerar documentação HTML
export function generateHtmlDocumentation(): string {
  const routes = routeRegistry.getAll();
  const groupedRoutes = routes.reduce((acc, route) => {
    const mainTag = route.tags?.[0] || 'General';
    if (!acc[mainTag]) acc[mainTag] = [];
    acc[mainTag].push(route);
    return acc;
  }, {} as Record<string, RouteDocumentation[]>);

  let html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MeetingMind API Documentation</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        h1 { color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 10px; }
        h2 { color: #34495e; margin-top: 40px; }
        .route { margin: 20px 0; padding: 20px; border: 1px solid #ddd; border-radius: 6px; background: #fafafa; }
        .method { display: inline-block; padding: 4px 8px; border-radius: 4px; font-weight: bold; font-size: 12px; }
        .method.GET { background: #27ae60; color: white; }
        .method.POST { background: #f39c12; color: white; }
        .method.PUT { background: #3498db; color: white; }
        .method.DELETE { background: #e74c3c; color: white; }
        .auth-required { color: #e74c3c; font-weight: bold; }
        .auth-not-required { color: #27ae60; font-weight: bold; }
        .parameters { margin: 10px 0; }
        .parameter { margin: 5px 0; padding: 5px; background: #ecf0f1; border-radius: 3px; }
        .example { background: #2c3e50; color: #ecf0f1; padding: 10px; border-radius: 4px; font-family: monospace; margin: 10px 0; overflow-x: auto; }
        .tag { display: inline-block; background: #3498db; color: white; padding: 2px 6px; border-radius: 3px; font-size: 11px; margin-right: 5px; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 MeetingMind API Documentation</h1>
        <p>Complete API reference for the MeetingMind application.</p>
  `;

  Object.entries(groupedRoutes).forEach(([tag, routes]) => {
    html += `<h2>${tag}</h2>`;
    
    routes.forEach(route => {
      html += `
        <div class="route">
          <div style="display: flex; align-items: center; margin-bottom: 10px;">
            <span class="method ${route.method}">${route.method}</span>
            <strong style="margin-left: 10px; font-size: 16px;">${route.path}</strong>
            <span style="margin-left: auto;" class="${route.auth ? 'auth-required' : 'auth-not-required'}">
              ${route.auth ? '🔒 Auth Required' : '🔓 Public'}
            </span>
          </div>
          
          <p><strong>Description:</strong> ${route.description}</p>
          
          ${route.tags ? `<div>${route.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>` : ''}
      `;

      if (route.parameters?.path) {
        html += '<div class="parameters"><strong>Path Parameters:</strong>';
        Object.entries(route.parameters.path).forEach(([name, param]) => {
          html += `<div class="parameter"><strong>${name}</strong> (${param.type}${param.required ? ', required' : ''}) - ${param.description}</div>`;
        });
        html += '</div>';
      }

      if (route.parameters?.query) {
        html += '<div class="parameters"><strong>Query Parameters:</strong>';
        Object.entries(route.parameters.query).forEach(([name, param]) => {
          html += `<div class="parameter"><strong>${name}</strong> (${param.type}${param.required ? ', required' : ''}) - ${param.description}</div>`;
        });
        html += '</div>';
      }

      if (route.requestBody) {
        html += `<div><strong>Request Body:</strong> ${route.requestBody.description}`;
        if (route.requestBody.example) {
          html += `<div class="example">${JSON.stringify(route.requestBody.example, null, 2)}</div>`;
        }
        html += '</div>';
      }

      html += '<div><strong>Responses:</strong>';
      Object.entries(route.responses).forEach(([statusCode, response]) => {
        html += `<div class="parameter"><strong>${statusCode}</strong> - ${response.description}`;
        if (response.example) {
          html += `<div class="example">${JSON.stringify(response.example, null, 2)}</div>`;
        }
        html += '</div>';
      });
      html += '</div>';

      html += '</div>';
    });
  });

  html += `
    </div>
</body>
</html>`;

  return html;
}
