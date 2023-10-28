import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, { params }) {
  const curso = await prisma.curso.findUnique({
    where: {
      id: Number(params.coursesId),
    },
  });

  return NextResponse.json(curso);
}

export async function PUT(request, { params }) {
  const data = await request.json();
  const taskUpdated = await prisma.curso.update({
    where: {
      id: Number(params.coursesId),
    },
    data: data,
  });
  return NextResponse.json(taskUpdated);
}

export function DELETE(request, { params }) {
  const taskDeleted = prisma.curso.delete({
    where: {
      id: Number(params.coursesId),
    },
  });
  return NextResponse.json(taskDeleted);
}
