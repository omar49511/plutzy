import React from "react";
import Image from "next/image";
export default function BackgroundRadialRight() {
  return (
    <div className="right-0 absolute -z-50 top-0">
      <Image
        src="/blue-radial-gradient.png"
        width={850}
        height={650}
        alt="circle"
      ></Image>
    </div>
  );
}
