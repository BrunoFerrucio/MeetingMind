import { setupRoutes } from './src/routes/index';
import { config } from './src/config/environment';

const router = setupRoutes();

const server = Bun.serve({
  port: config.PORT,
  async fetch(req) {
    return await router.handleRequest(req);
  },
});

console.log('🚀 MeetingMind API Server Started');
console.log(`📍 Running on: http://localhost:${server.port}`);
console.log(`🌐 Environment: ${config.NODE_ENV}`);
console.log(`🔐 Authentication: ${config.API_SECRET_KEY ? 'Enabled' : 'Disabled'}`);
console.log('');
console.log('📖 Available routes:');

// Log all registered routes
const routes = router.getRoutes();
routes.forEach(route => {
  const authStatus = route.path.includes('/docs') || route.path.includes('/health') || route.path.includes('/openapi') ? '🔓' : '🔒';
  console.log(`  ${authStatus} ${route.method.padEnd(6)} ${route.path}`);
});

console.log('');
console.log('📚 Documentation:');
console.log(`  • HTML Docs: http://localhost:${server.port}/api/docs`);
console.log(`  • OpenAPI JSON: http://localhost:${server.port}/api/openapi.json`);
console.log('');
console.log('🔑 Authentication:');
console.log('  • Add header: Authorization: Bearer <your-secret-key>');
console.log('');