import React from "react";
import Image from "next/image";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";

export default function Post() {
  return (
    <div className="bg-[#27272a] border border-[#3f3f46] flex mb-5  rounded-xl">
      <div className="bg-[#3f3f46] border border-[#3f3f46] flex flex-col justify-center items-center p-2  rounded-l-xl">
        <div className="flex flex-col items-center">
          <button className="m-auto group hover:text-red-500">
            <FaRegThumbsUp size="1.3em" />
          </button>
          <span>1997</span>
          <button className="m-auto group hover:text-indigo-500">
            <FaRegThumbsDown size="1.3em" />
          </button>
        </div>
      </div>
      <div className="border-x border-[#3f3f46] p-2 flex flex-col justify-center items-center w-40">
        <Image
          src="/LoR178.jpg"
          height={40}
          width={40}
          alt="Teemo"
          className="h-14 w-14 rounded-full"
        />
        <p>Usuario</p>
      </div>
      <div className="flex flex-col p-2">
        <h1 className="font-bold text-xl italic ">Title</h1>
        <p className="line-clamp-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quos
          numquam officia rerum quidem ipsam dignissimos porro itaque, vel eos
          eaque sit, optio repudiandae. Quibusdam aliquam dignissimos quo
          perspiciatis repudiandae.
        </p>
        <div className="flex justify-between">
          <p>Comentarios:3</p>
          <div className="flex gap-2">
            <p>Tags:</p>
            <span className="bg-[#3f3f46] outline outline-[#3f3f46] hover:outline-[#9ca3af] hover:outline-2 text-neutral-400 text-sm p-1 rounded-md">
              #tag1
            </span>
            <span className="bg-blue-500 p-1 rounded-md">#tag2</span>
            <span className="bg-[#283B4F] text-[#76C6ED] p-1 rounded-md">
              #tag3
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <span>Created by: 'user'</span> <span>Tags: #tag1, #tag2, #tag3</span> */
}
