import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { Role } from '@/app/interfaces/roles/role.interface';
import { ApiResponse } from '@/app/interfaces/response/api-response.interface';
import { ApiError } from '@/app/interfaces/error/error.interface';

export async function DELETE(
  _req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const roleId = Number(id);

  if (isNaN(roleId)) {
    return NextResponse.json(
      { success: false, message: 'ID role tidak valid' },
      { status: 400 }
    );
  }

  await prisma.roles.delete({
    where: { id: roleId },
  });

  return NextResponse.json({
    success: true,
    message: 'Role berhasil dihapus',
  });
}

export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // ✅ WAJIB await
  const roleId = Number(id);

  if (isNaN(roleId)) {
    return NextResponse.json(
      { success: false, message: 'ID role tidak valid' },
      { status: 400 }
    );
  }

  const body = await req.json();
  const { name } = body as { name?: string };

  if (!name || name.trim() === '') {
    return NextResponse.json(
      { success: false, message: 'Nama role wajib diisi' },
      { status: 400 }
    );
  }

  const role = await prisma.roles.update({
    where: { id: roleId },
    data: { name },
  });

  return NextResponse.json({
    success: true,
    message: 'Role berhasil diperbarui',
    data: role,
  });
}
