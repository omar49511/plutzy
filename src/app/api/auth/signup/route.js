import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function POST(request) {
  const data = await request.json();

  const userFound = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (userFound) {
    return NextResponse.json(
      { message: "Email already exists" },
      { status: 400 }
    );
  }

  const newUser = await prisma.user.create({
    data,
  });
  return NextResponse.json(newUser);
}
