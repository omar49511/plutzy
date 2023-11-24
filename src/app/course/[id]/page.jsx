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
          <h1 className="text-3xl pb-6">
            Introducción a la Programación con Python
          </h1>
          <p>
            Si quieres aprender a programar, quieres pulir tus habilidades o
            solo quieres mejorar tu salario, Python es tu opción. Python es el
            lenguaje de programación más popular en todo el mundo. Con salarios
            que superan los 100 mil dólares al año!
          </p>
          <p className="p-2">
            Creado por{" "}
            <a className="text-blue-300" href="">
              Hola Mundo
            </a>
          </p>
          <h2 className="text-2xl pt-6">Temario</h2>
          <List />
          <List />
          <List />
        </div>
        <div className="w-[400px] max-h-[400px] bg-neutral-100 border border-neutral-300 rounded-lg">
          <Image
            src={"/hola-mundo.jpg"}
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
              <p>191 lecciones</p>
            </div>
            <div className="flex gap-2">
              <div className="flex items-center">
                <MdOutlinePlayCircle />
              </div>
              <p>horas de contenido de video</p>
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
