// app/api/check-connection/route.ts
import { prisma } from '../../../lib/prisma'; // Sesuaikan path jika berbeda
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Lakukan query sederhana ke database
    await prisma.$queryRaw`SELECT 1`;

    return NextResponse.json(
      { success: true, message: 'Database connected successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Database connection error:', error);

    return NextResponse.json(
      { success: false, message: 'Failed to connect to database.', error: (error as Error).message },
      { status: 500 }
    );
  } finally {
    // Opsional: Tutup koneksi (tidak wajib di Next.js karena singleton)
    // await prisma.$disconnect();
  }
}