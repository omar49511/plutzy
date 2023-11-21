import Title from "@/components/Title";
import TextBox from "@/components/Forum/TextBox";
import Link from "next/link";
import React from "react";

export default function SubmitPost() {
  return (
    <div className="max-w-5xl w-full m-auto pt-24">
      <Title Title={"Crear una publicación"} />
      <div className="bg-neutral-100 border border-neutral-300 rounded-lg">
        <form action="">
          <div className="flex flex-col">
            <div className="px-4 pb-2 pt-4">
              <input
                id=""
                name=""
                type="text"
                className="outline outline-2 outline-neutral-400 p-2 w-full rounded"
                placeholder="Title"
              />
            </div>
            <div className="px-4 pb-2 pt-2">
              <TextBox
                name="description"
                id="idDescription"
                cols="30"
                rows="10"
                placeholder="Write a description..."
              />
            </div>
            <div className="flex justify-end px-4 pb-4 pt-2">
              <Link
                href={"/foro"}
                className="h-10 w-24 bg-neutral-50 hover:bg-sky-50 border border-sky-600 p-2 mr-4 rounded text-center text-sky-600"
              >
                Cancelar
              </Link>
              <button className="h-10 w-24 bg-sky-600 hover:bg-sky-700 border border-sky-600 p-2 rounded text-center text-neutral-50">
                Publicar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
