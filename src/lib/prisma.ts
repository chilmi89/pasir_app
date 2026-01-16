import { PrismaClient } from '@/app/generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
  pgPool: Pool | undefined;
};

// ✅ Pastikan DATABASE_URL ada
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined');
}

// ✅ Singleton PG Pool
const pool =
  globalForPrisma.pgPool ??
  new Pool({
    connectionString: process.env.DATABASE_URL,
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.pgPool = pool;
}

// ✅ Prisma Adapter
const adapter = new PrismaPg(pool);

// ✅ Prisma Client singleton
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
    log: ['error', 'warn'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
