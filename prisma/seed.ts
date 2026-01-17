import 'dotenv/config';
import { PrismaClient } from '../src/app/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import bcrypt from 'bcryptjs';

// Buat adapter untuk Prisma 7
const adapter = new PrismaPg(
  new Pool({
    connectionString: process.env.DATABASE_URL,
  })
);

// Buat PrismaClient dengan adapter
const prisma = new PrismaClient({ adapter });

async function main() {
  const password = 'admin123';
  const hashedPassword = await bcrypt.hash(password, 10);

  const adminRole = await prisma.roles.upsert({
    where: { name: 'admin' },
    update: {},
    create: { name: 'admin' },
  });

  await prisma.roles.upsert({
    where: { name: 'sopir' },
    update: {},
    create: { name: 'sopir' },
  });

  await prisma.users.upsert({
    where: { email: 'adminpasir@gmail.com' },
    update: {},
    create: {
      email: 'adminpasir@gmail.com',
      password: hashedPassword,
      role_id: adminRole.id,
      is_active: true,
    },
  });

  console.log('✅ Seeding berhasil!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
