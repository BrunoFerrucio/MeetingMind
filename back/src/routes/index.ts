import { Router } from '../utils/router';
import { ResponseHelper } from '../utils/response';
import { generateHtmlDocumentation, routeRegistry } from '../utils/documentation';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from './users';

export function setupRoutes(): Router {
  const router = new Router();

  // Health check route (public)
  router.get('/api/health', async (req: Request) => {
    return ResponseHelper.success({ 
      status: 'healthy', 
      timestamp: new Date().toISOString(),
      version: '1.0.0'
    }, 'API is healthy', req);
  }, {
    description: 'Health check endpoint to verify API status',
    tags: ['System'],
    auth: false,
    responses: {
      '200': {
        description: 'API is healthy',
        example: {
          success: true,
          data: {
            status: 'healthy',
            timestamp: '2024-01-01T12:00:00.000Z',
            version: '1.0.0'
          },
          message: 'API is healthy'
        }
      }
    }
  });

  // Documentation route (public)
  router.get('/api/docs', async (req: Request) => {
    const htmlDocs = generateHtmlDocumentation();
    return new Response(htmlDocs, {
      headers: { 'Content-Type': 'text/html' }
    });
  }, {
    description: 'API documentation in HTML format',
    tags: ['System'],
    auth: false,
    responses: {
      '200': {
        description: 'HTML documentation page'
      }
    }
  });

  // OpenAPI spec route (public)
  router.get('/api/openapi.json', async (req: Request) => {
    const openApiSpec = routeRegistry.generateOpenApiSpec();
    return ResponseHelper.success(openApiSpec, 'OpenAPI specification', req);
  }, {
    description: 'OpenAPI 3.0 specification in JSON format',
    tags: ['System'],
    auth: false,
    responses: {
      '200': {
        description: 'OpenAPI specification',
        example: {
          success: true,
          data: {
            openapi: '3.0.0',
            info: {
              title: 'MeetingMind API',
              version: '1.0.0'
            }
          }
        }
      }
    }
  });

  // User routes (all protected)
  router.get('/api/users', getUsers, {
    description: 'Get all users with optional pagination',
    tags: ['Users'],
    auth: true,
    parameters: {
      query: {
        page: {
          type: 'integer',
          description: 'Page number for pagination',
          required: false,
          example: 1
        },
        limit: {
          type: 'integer', 
          description: 'Number of users per page (max 100)',
          required: false,
          example: 10
        },
        sort: {
          type: 'string',
          description: 'Sort order (asc or desc)',
          required: false,
          example: 'asc'
        }
      }
    },
    responses: {
      '200': {
        description: 'Users retrieved successfully',
        example: {
          success: true,
          data: {
            users: [
              {
                id: 'uuid-here',
                name: 'João Silva',
                email: 'joao@example.com',
                age: 30,
                createdAt: '2024-01-01T12:00:00.000Z',
                updatedAt: '2024-01-01T12:00:00.000Z'
              }
            ],
            pagination: {
              page: 1,
              limit: 10,
              total: 1,
              totalPages: 1,
              hasNext: false,
              hasPrev: false
            }
          }
        }
      },
      '401': { description: 'Unauthorized - Missing or invalid token' },
      '400': { description: 'Bad Request - Invalid query parameters' }
    }
  });

  router.get('/api/users/:id', getUserById, {
    description: 'Get a specific user by ID',
    tags: ['Users'],
    auth: true,
    parameters: {
      path: {
        id: {
          type: 'string',
          description: 'User UUID',
          required: true,
          example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890'
        }
      }
    },
    responses: {
      '200': {
        description: 'User found',
        example: {
          success: true,
          data: {
            id: 'uuid-here',
            name: 'João Silva', 
            email: 'joao@example.com',
            age: 30,
            createdAt: '2024-01-01T12:00:00.000Z',
            updatedAt: '2024-01-01T12:00:00.000Z'
          }
        }
      },
      '401': { description: 'Unauthorized - Missing or invalid token' },
      '404': { description: 'User not found' }
    }
  });

  router.post('/api/users', createUser, {
    description: 'Create a new user',
    tags: ['Users'],
    auth: true,
    requestBody: {
      description: 'User data to create',
      schema: {
        type: 'object',
        properties: {
          name: { type: 'string', minLength: 2, maxLength: 100 },
          email: { type: 'string', format: 'email', maxLength: 255 },
          age: { type: 'integer', minimum: 13, maximum: 120 }
        },
        required: ['name', 'email']
      },
      example: {
        name: 'João Silva',
        email: 'joao@example.com',
        age: 30
      }
    },
    responses: {
      '200': {
        description: 'User created successfully',
        example: {
          success: true,
          data: {
            id: 'uuid-here',
            name: 'João Silva',
            email: 'joao@example.com',
            age: 30,
            createdAt: '2024-01-01T12:00:00.000Z',
            updatedAt: '2024-01-01T12:00:00.000Z'
          }
        }
      },
      '400': { description: 'Bad Request - Validation failed' },
      '401': { description: 'Unauthorized - Missing or invalid token' },
      '409': { description: 'Conflict - Email already exists' }
    }
  });

  router.put('/api/users/:id', updateUser, {
    description: 'Update an existing user',
    tags: ['Users'],
    auth: true,
    parameters: {
      path: {
        id: {
          type: 'string',
          description: 'User UUID',
          required: true,
          example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890'
        }
      }
    },
    requestBody: {
      description: 'User data to update (all fields optional)',
      schema: {
        type: 'object',
        properties: {
          name: { type: 'string', minLength: 2, maxLength: 100 },
          email: { type: 'string', format: 'email', maxLength: 255 },
          age: { type: 'integer', minimum: 13, maximum: 120 }
        }
      },
      example: {
        name: 'João Silva Updated',
        email: 'joao.updated@example.com'
      }
    },
    responses: {
      '200': { description: 'User updated successfully' },
      '400': { description: 'Bad Request - Validation failed' },
      '401': { description: 'Unauthorized - Missing or invalid token' },
      '404': { description: 'User not found' },
      '409': { description: 'Conflict - Email already exists' }
    }
  });

  router.delete('/api/users/:id', deleteUser, {
    description: 'Delete a user',
    tags: ['Users'],
    auth: true,
    parameters: {
      path: {
        id: {
          type: 'string',
          description: 'User UUID',
          required: true,
          example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890'
        }
      }
    },
    responses: {
      '200': { description: 'User deleted successfully' },
      '401': { description: 'Unauthorized - Missing or invalid token' },
      '404': { description: 'User not found' }
    }
  });

  return router;
}
