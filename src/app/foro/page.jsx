import React from "react";
import Post from "@/components/Forum/Post";
import CreatePost from "@/components/Forum/CreatePost";
import Title from "@/components/Title";

import Image from "next/image";
import { FaFilter } from "react-icons/fa6";

async function loadPost() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const posts = await res.json();
    return posts;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default async function page() {
  const tags = ["Backend", "Frontend", "Javascript", "Typescrip", "Tailwind"]; // Añadir mas
  const posts = await loadPost();

  return (
    <div className="max-w-5xl h-[780px] w-full m-auto py-16 pt-20">
      <Title Title={"Publicaciones recientes"} />
      <button className="bg-gradient-to-r from-blue-500 to-teal-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center mb-4">
        <FaFilter className="mr-2" /> filtrar
      </button>
      <CreatePost />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
