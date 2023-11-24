import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Thumbnail({ img, title, description }) {
  return (
    <>
      <div className="p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <Image
          className="w-full h-40 object-cover rounded-t-lg"
          width={300}
          height={300}
          src={`/${img}`}
          alt="lux"
          priority={true}
        />
        <div className="p-4">
          <h2 className="dark:text-black text-xl  font-semibold">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
        <Link className="px-4 py-2 bg-blue-500" href="/course/clases/">
          Entrar
        </Link>
      </div>
    </>
  );
}
