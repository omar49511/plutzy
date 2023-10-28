import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const cursos = await prisma.course.findMany();
  console.log(cursos);
  return NextResponse.json(cursos);
}
export async function POST(request) {
  const { title, description, img } = await request.json();

  const newCurso = await prisma.course.create({
    data: { title, description, img },
  });
  return NextResponse.json(newCurso);
}
