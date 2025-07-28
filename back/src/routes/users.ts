import { ResponseHelper } from '../utils/response';
import { UrlHelper, PaginationQuerySchema, UserRouteParamsSchema } from '../utils/url';
import { z } from 'zod';

// Schemas para validação
const CreateUserSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name too long'),
  email: z.string().email('Invalid email format').max(255, 'Email too long'),
  age: z.number().min(13, 'Must be at least 13 years old').max(120, 'Invalid age').optional()
});

const UpdateUserSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name too long').optional(),
  email: z.string().email('Invalid email format').max(255, 'Email too long').optional(),
  age: z.number().min(13, 'Must be at least 13 years old').max(120, 'Invalid age').optional()
});

// Interface do usuário
interface User {
  id: string;
  name: string;
  email: string;
  age?: number;
  createdAt: string;
  updatedAt: string;
}

// Simulando um banco de dados em memória
const users: User[] = [
  {
    id: crypto.randomUUID(),
    name: 'João Silva',
    email: 'joao@example.com',
    age: 30,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: crypto.randomUUID(),
    name: 'Maria Santos',
    email: 'maria@example.com',
    age: 25,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

// GET /api/users - Listar todos os usuários (protegida)
export const getUsers = ResponseHelper.withAuth(async (req: Request): Promise<Response> => {
  try {
    const { params } = UrlHelper.parseUrl(req.url);
    const validatedQuery = UrlHelper.validateQueryParams(params, PaginationQuerySchema);
    
    let result = users;
    
    // Apply pagination
    const page = validatedQuery.page || 1;
    const limit = validatedQuery.limit || 10;
    const sort = validatedQuery.sort || 'asc';
    
    // Sort users
    if (sort === 'desc') {
      result = [...result].reverse();
    }
    
    // Apply pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedUsers = result.slice(startIndex, endIndex);
    
    return ResponseHelper.success({
      users: paginatedUsers,
      pagination: {
        page,
        limit,
        total: users.length,
        totalPages: Math.ceil(users.length / limit),
        hasNext: endIndex < users.length,
        hasPrev: page > 1
      }
    }, 'Users retrieved successfully', req);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return ResponseHelper.validationError(error, req);
    }
    return ResponseHelper.serverError('Failed to fetch users', req);
  }
});

// GET /api/users/:id - Buscar usuário por ID (protegida)
export const getUserById = ResponseHelper.withAuth(async (req: Request): Promise<Response> => {
  try {
    const params = (req as any).params;
    const validatedParams = UrlHelper.validateQueryParams(params, UserRouteParamsSchema);
    
    const user = users.find(u => u.id === validatedParams.id);
    
    if (!user) {
      return ResponseHelper.notFound('User not found', req);
    }
    
    return ResponseHelper.success(user, 'User retrieved successfully', req);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return ResponseHelper.validationError(error, req);
    }
    return ResponseHelper.serverError('Failed to fetch user', req);
  }
});

// POST /api/users - Criar novo usuário (protegida)
export const createUser = ResponseHelper.withAuth(async (req: Request): Promise<Response> => {
  try {
    const body = await req.json();
    const validatedBody = CreateUserSchema.parse(body);
    
    // Check if email already exists
    const existingUser = users.find(u => u.email === validatedBody.email);
    if (existingUser) {
      return ResponseHelper.error('Email already exists', 409, req);
    }
    
    const newUser: User = {
      id: crypto.randomUUID(),
      name: validatedBody.name,
      email: validatedBody.email,
      age: validatedBody.age,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    users.push(newUser);
    
    return ResponseHelper.success(newUser, 'User created successfully', req);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return ResponseHelper.validationError(error, req);
    }
    if (error instanceof SyntaxError) {
      return ResponseHelper.error('Invalid JSON in request body', 400, req);
    }
    return ResponseHelper.serverError('Failed to create user', req);
  }
});

// PUT /api/users/:id - Atualizar usuário (protegida)
export const updateUser = ResponseHelper.withAuth(async (req: Request): Promise<Response> => {
  try {
    const params = (req as any).params;
    const validatedParams = UrlHelper.validateQueryParams(params, UserRouteParamsSchema);
    
    const userIndex = users.findIndex(u => u.id === validatedParams.id);
    
    if (userIndex === -1) {
      return ResponseHelper.notFound('User not found', req);
    }
    
    const body = await req.json();
    const validatedBody = UpdateUserSchema.parse(body);
    
    // Check if email already exists in another user
    if (validatedBody.email) {
      const existingUser = users.find(u => u.email === validatedBody.email && u.id !== validatedParams.id);
      if (existingUser) {
        return ResponseHelper.error('Email already exists', 409, req);
      }
    }
    
    // Update user
    const updatedUser: User = {
      ...users[userIndex]!,
      ...validatedBody,
      updatedAt: new Date().toISOString()
    };
    
    users[userIndex] = updatedUser;
    
    return ResponseHelper.success(updatedUser, 'User updated successfully', req);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return ResponseHelper.validationError(error, req);
    }
    if (error instanceof SyntaxError) {
      return ResponseHelper.error('Invalid JSON in request body', 400, req);
    }
    return ResponseHelper.serverError('Failed to update user', req);
  }
});

// DELETE /api/users/:id - Deletar usuário (protegida)
export const deleteUser = ResponseHelper.withAuth(async (req: Request): Promise<Response> => {
  try {
    const params = (req as any).params;
    const validatedParams = UrlHelper.validateQueryParams(params, UserRouteParamsSchema);
    
    const userIndex = users.findIndex(u => u.id === validatedParams.id);
    
    if (userIndex === -1) {
      return ResponseHelper.notFound('User not found', req);
    }
    
    const deletedUser = users.splice(userIndex, 1)[0];
    
    return ResponseHelper.success(deletedUser, 'User deleted successfully', req);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return ResponseHelper.validationError(error, req);
    }
    return ResponseHelper.serverError('Failed to delete user', req);
  }
});
