import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const cursos = await prisma.curso.findMany();
  console.log(cursos);
  return NextResponse.json(cursos);
}
export async function POST(request) {
  const { title, description, img } = await request.json();

  const newCurso = await prisma.curso.create({
    data: { title, description, img },
  });
  return NextResponse.json(newCurso);
}
export async function PUT(request) {
  const curso = await prisma.curso.update({
    where: { id: request.body.id },
    data: request.body,
  });
  return NextResponse.json(curso);
}
