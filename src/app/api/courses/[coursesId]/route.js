import { NextResponse } from "next/server";
import { prisma } from "@/libs/db";

export async function GET(request, { params }) {
  const course = await prisma.course.findUnique({
    where: {
      id: Number(params.coursesId),
    },
  });

  return NextResponse.json(course);
}

export async function PUT(request, { params }) {
  const data = await request.json();
  const taskUpdated = await prisma.course.update({
    where: {
      id: Number(params.coursesId),
    },
    data: data,
  });
  return NextResponse.json(taskUpdated);
}

export function DELETE(request, { params }) {
  const taskDeleted = prisma.course.delete({
    where: {
      id: Number(params.coursesId),
    },
  });
  return NextResponse.json(taskDeleted);
}
