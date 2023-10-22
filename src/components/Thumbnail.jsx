import React from "react";
import Image from "next/image";

export default function Thumbnail({ size, dataThumbnail }) {
  return (
    <>
      <div className="p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <Image
          className="w-full h-40 object-cover rounded-t-lg"
          width={size}
          height={size}
          src={dataThumbnail.img}
          alt="lux"
          priority={true}
        />
        <div className="p-4">
          <h2 className="text-xl  font-semibold">{dataThumbnail.title}</h2>
          <p className="text-gray-600">{dataThumbnail.description}</p>
        </div>
      </div>
    </>
  );
}
