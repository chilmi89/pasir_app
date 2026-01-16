import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Role } from '@/app/interfaces/roles/role.interface';
import { ApiResponse } from '@/app/interfaces/response/api-response.interface';
import { ApiError } from '@/app/interfaces/error/error.interface';
import { NextRequest } from 'next/server';


export async function GET() {
  try {
    const roles: Role[] = await prisma.roles.findMany();

    const response: ApiResponse<Role[]> = {
      success: true,
      message: 'Berhasil mengambil roles',
      data: roles,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error: unknown) {
    const err = error as ApiError;

    const response: ApiResponse<null> = {
      success: false,
      message: 'gagal mengambil roles',
      error: err.message,
    };

    return NextResponse.json(response, { status: 500 });
  }
}

// Create Role
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name } = body;

    // ✅ Validasi sederhana
    if (!name || typeof name !== 'string') {
      const response: ApiResponse<null> = {
        success: false,
        message: 'Nama role wajib diisi',
      };

      return NextResponse.json(response, { status: 400 });
    }

    // ✅ Create role
    const role: Role = await prisma.roles.create({
      data: { name },
    });

    const response: ApiResponse<Role> = {
      success: true,
      message: 'Role berhasil ditambahkan',
      data: role,
    };

    return NextResponse.json(response, { status: 201 });
  } catch (error: unknown) {
    const err = error as ApiError;

    // ✅ Handle unique constraint Prisma
    if (err.code === 'P2002') {
      const response: ApiResponse<null> = {
        success: false,
        message: 'Role sudah ada',
      };

      return NextResponse.json(response, { status: 409 });
    }

    const response: ApiResponse<null> = {
      success: false,
      message: 'Gagal menambahkan role',
      error: err.message,
    };

    return NextResponse.json(response, { status: 500 });
  }
}
