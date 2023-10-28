import React from "react";
import Image from "next/image";
export default function BackgroundRadialLeft() {
  return (
    <div className="left-0 absolute -z-50 top-[200px]">
      <Image
        priority
        className="w-auto h-auto"
        src="/0920_Mixed_Pleasures_radial_gradient.webp"
        width={850}
        height={650}
        alt="circle"
      ></Image>
    </div>
  );
}
