import React from "react";
import Image from "next/image";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import { LiaCommentSolid } from "react-icons/lia";
import Link from "next/link";

export default function Post({ post }) {
  return (
    <Link
      href={`/foro/${post.id}`}
      className="bg-neutral-100 border border-gray-300 dark:bg-[#27272a] flex mb-4 rounded-lg hover:outline hover:outline-2 hover:outline-sky-500 dark:hover:outline-sky-400 transform hover:scale-105 transition-transform duration-300 ease-in-out"
    >
      <div className="bg-gray-100  flex flex-col justify-center items-center p-2  rounded-l-lg dark:bg-[#3f3f46]">
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
      <div className="border-x border-gray-300 p-2 flex flex-col justify-center items-center min-w-[6rem] ">
        <Image
          src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?cs=srgb&dl=pexels-ali-pazani-2787341.jpg&fm=jpg"
          height={40}
          width={40}
          alt="User"
          className="h-14 w-14 rounded-full object-cover"
        />
        <p className="text-center line-clamp-1">Cinta Verges</p>
      </div>
      <div className="flex flex-col p-2 justify-between">
        <h1 className="font-bold text-xl italic bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          {post.title}
        </h1>
        <p className="line-clamp-1">{post.body}</p>
        <div className="flex justify-between">
          <p className="flex justify-center items-center gap-1 text-neutral-500">
            <LiaCommentSolid />
            <span>3</span> <span>comentarios</span>
          </p>
          <div className="flex justify-center items-center gap-2 ">
            <p className="text-neutral-500">tags:</p>

            <span className="cursor-pointer px-2 pb-[2px] text-sm text-[#76C6ED] bg-[#283B4F] rounded-md hover:bg-[#273c31]">
              # tag1
            </span>
            <span className="cursor-pointer px-2 pb-[2px] text-sm text-[#76C6ED] bg-[#283B4F] rounded-md hover:bg-[#273c31]">
              # tag2
            </span>
            <span className="cursor-pointer px-2 pb-[2px] text-sm text-[#76C6ED] bg-[#283B4F] rounded-md hover:bg-[#273c31]">
              # tag3
            </span>
            <span className="cursor-pointer px-2 pb-[2px] text-sm text-[#76C6ED] bg-[#283B4F] rounded-md hover:bg-[#273c31]">
              # tag4
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
{
  /* <span>Created by: 'user'</span> <span>Tags: #tag1, #tag2, #tag3</span> */
}
