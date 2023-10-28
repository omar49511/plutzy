import React from "react";
import Image from "next/image";

export default function Thumbnail({ data }) {
  return (
    <>
      <div className="p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <Image
          className="w-full h-40 object-cover rounded-t-lg"
          width={300}
          height={300}
          src={`/${data.img}`}
          alt="lux"
          priority={true}
        />
        <div className="p-4">
          <h2 className="dark:text-black text-xl  font-semibold">
            {data.title}
          </h2>
          <p className="text-gray-600">{data.description}</p>
        </div>
      </div>
    </>
  );
}
