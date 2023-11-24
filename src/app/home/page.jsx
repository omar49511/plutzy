import React from "react";
import Carousel from "@/components/Carousel";
import Thumbnail from "@/components/Thumbnail";

async function getData() {
  const res = await fetch("http://localhost:3000/api/courses");
  const data = await res.json();
  return data;
}

export default async function HomePage() {
  const dataThumbnail = await getData();
  // const images = dataThumbnail.map((item) => item.img);
  const enlaces = [
    { img: "mini1.png" },
    { img: "mini2.png" },
    { img: "mini1.png" },
    { img: "mini2.png" },
    { img: "mini1.png" },
  ];

  const data = [];
  return (
    <>
      <div className="max-w-5xl h-[780px] w-full  m-auto  py-16 pt-20">
        <Carousel enlaces={enlaces} />
      </div>
      <div className="max-w-5xl w-full m-auto">
        <h1 className="text-center text-3xl font-bold text-gray-700 dark:text-white">
          Últimos cursos
        </h1>
        <hr className="my-4" />
        <div className="grid grid-cols-column gap-4">
          <Thumbnail
            img="mini1.png"
            title="Versiones anteriores"
            description="Adentro encontraras versiones anteriores a la actual"
          />
          <Thumbnail
            img="mini2.png"
            title="Versiones anteriores"
            description="Adentro encontraras versiones anteriores a la actual"
          />{" "}
          <Thumbnail
            img="mini1.png"
            title="Versiones anteriores"
            description="Adentro encontraras versiones anteriores a la actual"
          />{" "}
          <Thumbnail
            img="mini2.png"
            title="Versiones anteriores"
            description="Adentro encontraras versiones anteriores a la actual"
          />
        </div>
      </div>
    </>
  );
}
