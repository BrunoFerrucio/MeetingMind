import { ResponseHelper } from '../utils/response';
import { UrlHelper } from '../utils/url';
import type { RouteParams } from '../types/api';

// Simulando um banco de dados em memória para o exemplo
interface User {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}

const users: User[] = [
  {
    id: 1,
    name: 'João Silva',
    email: 'joao@example.com',
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    name: 'Maria Santos',
    email: 'maria@example.com',
    createdAt: new Date().toISOString()
  }
];

// GET /api/users - Listar todos os usuários
export async function getUsers(req: Request): Promise<Response> {
  const { params } = UrlHelper.parseUrl(req.url);
  const limit = params.limit ? parseInt(params.limit as string) : undefined;
  
  let result = users;
  
  if (limit && limit > 0) {
    result = users.slice(0, limit);
  }
  
  return ResponseHelper.success(result, 'Users retrieved successfully');
}

// GET /api/users/:id - Buscar usuário por ID
export async function getUserById(req: Request): Promise<Response> {
  const params = (req as any).params as RouteParams;
  const userId = parseInt(params.id || '0');
  
  if (isNaN(userId) || userId <= 0) {
    return ResponseHelper.error('Invalid user ID');
  }
  
  const user = users.find(u => u.id === userId);
  
  if (!user) {
    return ResponseHelper.notFound('User not found');
  }
  
  return ResponseHelper.success(user, 'User retrieved successfully');
}

// POST /api/users - Criar novo usuário
export async function createUser(req: Request): Promise<Response> {
  try {
    const body = await req.json() as any;
    
    if (!body.name || !body.email) {
      return ResponseHelper.error('Name and email are required');
    }
    
    // Verificar se email já existe
    const existingUser = users.find(u => u.email === body.email);
    if (existingUser) {
      return ResponseHelper.error('Email already exists');
    }
    
    const newUser: User = {
      id: Math.max(...users.map(u => u.id), 0) + 1,
      name: body.name,
      email: body.email,
      createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    
    return ResponseHelper.success(newUser, 'User created successfully');
  } catch (error) {
    return ResponseHelper.error('Invalid JSON body');
  }
}

// PUT /api/users/:id - Atualizar usuário
export async function updateUser(req: Request): Promise<Response> {
  try {
    const params = (req as any).params as RouteParams;
    const userId = parseInt(params.id || '0');
    
    if (isNaN(userId) || userId <= 0) {
      return ResponseHelper.error('Invalid user ID');
    }
    
    const userIndex = users.findIndex(u => u.id === userId);
    
    if (userIndex === -1) {
      return ResponseHelper.notFound('User not found');
    }
    
    const body = await req.json() as any;
    
    if (body.name) {
      users[userIndex]!.name = body.name;
    }
    
    if (body.email) {
      // Verificar se email já existe em outro usuário
      const existingUser = users.find(u => u.email === body.email && u.id !== userId);
      if (existingUser) {
        return ResponseHelper.error('Email already exists');
      }
      users[userIndex]!.email = body.email;
    }
    
    return ResponseHelper.success(users[userIndex], 'User updated successfully');
  } catch (error) {
    return ResponseHelper.error('Invalid JSON body');
  }
}

// DELETE /api/users/:id - Deletar usuário
export async function deleteUser(req: Request): Promise<Response> {
  const params = (req as any).params as RouteParams;
  const userId = parseInt(params.id || '0');
  
  if (isNaN(userId) || userId <= 0) {
    return ResponseHelper.error('Invalid user ID');
  }
  
  const userIndex = users.findIndex(u => u.id === userId);
  
  if (userIndex === -1) {
    return ResponseHelper.notFound('User not found');
  }
  
  const deletedUser = users.splice(userIndex, 1)[0];
  
  return ResponseHelper.success(deletedUser, 'User deleted successfully');
}
