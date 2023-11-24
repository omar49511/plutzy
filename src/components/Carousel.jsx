"use client";
import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function Carousel({ enlaces }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    const isLastImage = currentIndex === enlaces.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const prevImage = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? enlaces.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  return (
    <>
      <div
        style={{ backgroundImage: `url(${enlaces[currentIndex].img})` }}
        className="w-full h-full rounded-lg bg-center bg-cover relative"
      >
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5  rounded-full p-2 bg-black text-white">
          <BsChevronLeft onClick={prevImage} size={30}>
            Retroceder
          </BsChevronLeft>
        </div>

        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5  rounded-full p-2 bg-black text-white">
          <BsChevronRight onClick={nextImage} size={30}>
            Avanzar
          </BsChevronRight>
        </div>
      </div>
    </>
  );
}
