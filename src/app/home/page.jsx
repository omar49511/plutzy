import React from "react";
import Carousel from "@/components/Carousel";
import Thumbnail from "@/components/Thumbnail";

export default function HomePage() {
  const enlaces = [
    { img: "15640.webp" },
    { img: "LoR14.jpg" },
    { img: "LoR98.jpg" },
    { img: "LoR115.jpg" },
    { img: "LoR116.jpg" },
    { img: "LoR178.jpg" },
  ];

  return (
    <>
      <div className="max-w-5xl h-[780px] w-full  m-auto  py-16 pt-40">
        <Carousel enlaces={enlaces} />
      </div>
      <div className="max-w-5xl w-full  m-auto  py-16 pt-40">
        <h1 className="text-center text-3xl font-bold text-gray-700 dark:text-white">
          Últimos cursos
        </h1>
        <hr className="my-4" />
        <div className="grid grid-cols-column gap-4">
          <Thumbnail
            size={150}
            dataThumbnail={{
              title: "Lorem ipsum",
              img: "/LoR13.jpg",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              time: "2:00",
            }}
          />
          <Thumbnail
            size={150}
            dataThumbnail={{
              title: "Lorem ipsum",
              img: "/LoR13.jpg",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              time: "2:00",
            }}
          />
          <Thumbnail
            size={150}
            dataThumbnail={{
              title: "Lorem ipsum",
              img: "/LoR13.jpg",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              time: "2:00",
            }}
          />
          <Thumbnail
            size={150}
            dataThumbnail={{
              title: "Lorem ipsum",
              img: "/LoR13.jpg",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              time: "2:00",
            }}
          />
          <Thumbnail
            size={150}
            dataThumbnail={{
              title: "Lorem ipsum",
              img: "/LoR13.jpg",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              time: "2:00",
            }}
          />
          <Thumbnail
            size={150}
            dataThumbnail={{
              title: "Lorem ipsum",
              img: "/LoR13.jpg",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              time: "2:00",
            }}
          />
          <Thumbnail
            size={150}
            dataThumbnail={{
              title: "Lorem ipsum",
              img: "/LoR13.jpg",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              time: "2:00",
            }}
          />
        </div>
      </div>
    </>
  );
}
