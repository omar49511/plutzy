import { NextResponse } from "next/server";
import { prisma } from "@/libs/db";

export async function GET() {
  const posts = await prisma.post.findMany();
  return NextResponse.json(posts);
}

export async function POST(request) {
  const { title, content, comments, tags } = await request.json();
  const newPost = await prisma.post.create({
    data: { title, content, comments, tags },
  });
  return NextResponse.json(newPost);
}
