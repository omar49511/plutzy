import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CreatePost() {
  return (
    <div>
      <Link
        href={"/foro/submit"}
        className="bg-neutral-100 border border-neutral-300 dark:bg-[#27272a] flex items-center gap-4 p-4 rounded-lg mb-5 cursor-default"
      >
        <Image
          src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?cs=srgb&dl=pexels-ali-pazani-2787341.jpg&fm=jpg"
          height={40}
          width={40}
          alt="Teemo"
          className="h-10 w-10 rounded-full object-cover"
        />
        <div className="w-full ">
          <form action="">
            <input
              type="text"
              name="createPost"
              id=""
              placeholder="Create Post"
              className="text-black dark:text-white w-full rounded outline outline-2 hover:outline-[#3f3f46] outline-[#9ca3af] focus:border-none focus:outline-none p-2 dark:bg-[#3f3f46]"
            />
          </form>
        </div>
      </Link>
    </div>
  );
}
