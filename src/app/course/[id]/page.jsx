import Individual from "../Individual";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import List from "@/components/course/List";
import Image from "next/image";
import { MdLibraryBooks, MdOutlinePlayCircle } from "react-icons/md";

export default function page() {
  return (
    <div className="max-w-7xl m-auto pt-24">
      <Title Title="Contenido del curso" />
      <div className=" flex justify-between">
        <div className="max-w-[800px]">
          <h1 className="text-3xl pb-6">Versiones anteriores</h1>
          <p>
            Esto solo es una prueba que muestra las versiones anteriores a esta
            pagina. En esta parte se podrá apreciar como fue cambiando la pagina
            conforme iva avanzando su desarrollo.
          </p>
          <p className="p-2">
            Creado por{" "}
            <a className="text-blue-300" href="https://github.com/LXMRPDLL">
              lxmrpdll
            </a>
          </p>
          <h2 className="text-2xl pt-6">Temario</h2>
          <List />
        </div>
        <div className="w-[400px] max-h-[400px] bg-neutral-100 border border-neutral-300 rounded-lg">
          <Image
            src={"/mini1.png"}
            alt="image"
            width={200}
            height={200}
            className="w-full object-cover p-4"
          />
          <div className="px-4 pb-4">
            <h2 className="text-xl py-1">Acerca del curso</h2>
            <div className="flex gap-2">
              <div className="flex items-center">
                <MdLibraryBooks />
              </div>
              <p>#4 lecciones</p>
            </div>
            <div className="flex gap-2">
              <div className="flex items-center">
                <MdOutlinePlayCircle />
              </div>
              <p>pocas horas de contenido de video</p>
            </div>
            <div className="flex flex-col gap-1 mt-4">
              <button className="bg-sky-600 hover:bg-sky-700 border border-sky-600 p-2 rounded text-center text-neutral-50">
                Empezar ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
