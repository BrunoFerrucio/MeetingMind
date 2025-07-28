import { z } from 'zod';

// Schema de configuração do ambiente
const EnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.string().transform(val => parseInt(val, 10)).pipe(z.number().min(1).max(65535)).default(3001),
  ALLOWED_ORIGIN: z.string().url().default(`http://localhost:${Bun.env.PORT}`),
  API_SECRET_KEY: z.string().min(32, 'API_SECRET_KEY must be at least 32 characters long'),
  DATABASE_URL: z.string().url().optional()
});

// Validar e exportar configuração
function loadConfig() {
  try {
    const config = EnvSchema.parse({
      NODE_ENV: Bun.env.NODE_ENV,
      PORT: Bun.env.PORT,
      ALLOWED_ORIGIN: Bun.env.ALLOWED_ORIGIN,
      API_SECRET_KEY: Bun.env.API_SECRET_KEY,
      DATABASE_URL: Bun.env.DATABASE_URL
    });

    return config;
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('❌ Invalid environment configuration:');
      error.issues.forEach(issue => {
        console.error(`  - ${issue.path.join('.')}: ${issue.message}`);
      });
      process.exit(1);
    }
    throw error;
  }
}

export const config = loadConfig();

// Helper para verificar ambiente
export const isDevelopment = config.NODE_ENV === 'development';
export const isProduction = config.NODE_ENV === 'production';

console.log(`🔧 Environment: ${config.NODE_ENV}`);
console.log(`🌐 CORS Origin: ${config.ALLOWED_ORIGIN}`);
console.log(`🔐 API Authentication: ${config.API_SECRET_KEY ? 'Enabled' : 'Disabled'}`);
