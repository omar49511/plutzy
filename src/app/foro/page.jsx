import React from "react";
import Post from "@/components/Post";
import Image from "next/image";
import { FaFilter } from "react-icons/fa6";

export default function page() {
  const tags = ["Backend", "Frontend", "Javascript", "Typescrip", "Tailwind"]; // Añadir mas
  return (
    <>
      <div className="max-w-5xl h-[780px] w-full  m-auto  py-16 pt-40">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center mb-4">
          <FaFilter className="mr-2" /> filter
        </button>
        <div className="bg-[#27272a] flex gap-4 p-2 rounded-xl border border-[#3f3f46] mb-5">
          <Image
            src="/LoR178.jpg"
            height={40}
            width={40}
            alt="Teemo"
            className="h-14 w-14 rounded-full"
          />
          <div className="w-full ">
            <input
              type="text"
              name=""
              id=""
              placeholder="Create Post"
              className="w-full h-full rounded-xl outline outline-[#3f3f46] hover:outline-[#9ca3af] hover:outline-2 focus:border-none focus:outline-none p-5 bg-[#3f3f46]"
            />
          </div>
        </div>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
}
