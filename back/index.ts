import { setupRoutes } from './src/routes/index';

const router = setupRoutes();

const server = Bun.serve({
  port: Bun.env.PORT || 3001,
  async fetch(req) {
    return await router.handleRequest(req);
  },
});

console.log(`🚀 Server running on http://localhost:${server.port}`);
console.log('📖 Available routes:');
console.log('  GET    /api/health');
console.log('  GET    /api/users');
console.log('  GET    /api/users/:id');
console.log('  POST   /api/users');
console.log('  PUT    /api/users/:id');
console.log('  DELETE /api/users/:id');