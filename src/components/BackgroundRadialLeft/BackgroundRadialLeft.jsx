import React from "react";
import Image from "next/image";
export default function BackgroundRadialLeft() {
  return (
    <div className="left-0 absolute -z-50 top-[500px] backdrop-blur-2xl blur-3xl">
      <Image
        src="/0920_Mixed_Pleasures_radial_gradient.webp"
        width={850}
        height={650}
        alt="circle"
      ></Image>
    </div>
  );
}
