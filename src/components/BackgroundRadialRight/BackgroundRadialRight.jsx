import React from "react";
import Image from "next/image";
export default function BackgroundRadialRight() {
  return (
    <div className="absolute -z-50 top-60 -left-40 md:left-[1300px] md:top-80">
      <Image
        className="w-auto h-auto"
        src="/blue-radial-gradient.png"
        width={850}
        height={650}
        alt="circle"
      ></Image>
    </div>
  );
}
