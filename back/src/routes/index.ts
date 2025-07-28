import { Router } from '../utils/router';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from './users';

export function setupRoutes(): Router {
  const router = new Router();

  // Rota de health check
  router.get('/api/health', async () => {
    return new Response(JSON.stringify({
      success: true,
      message: 'API is running',
      timestamp: new Date().toISOString()
    }), {
      headers: { 'Content-Type': 'application/json' }
    });
  });

  // Rotas de usuários
  router.get('/api/users', getUsers);
  router.get('/api/users/:id', getUserById);
  router.post('/api/users', createUser);
  router.put('/api/users/:id', updateUser);
  router.delete('/api/users/:id', deleteUser);

  return router;
}
