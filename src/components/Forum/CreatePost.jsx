import React from "react";
import Image from "next/image";

export default function CreatePost() {
  return (
    <div>
      <div className="bg-gray-100 dark:bg-[#27272a] flex items-center gap-4 p-4 rounded-lg border border-[#3f3f46] mb-5">
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
              className="text-black dark:text-white w-full rounded outline outline-[#3f3f46] hover:outline-[#9ca3af] hover:outline-2 focus:border-none focus:outline-none p-2 dark:bg-[#3f3f46]"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
