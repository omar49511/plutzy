import Image from "next/image";
export default function individual() {
  return (
    <div className="h-[60vh] bg-zinc-900 flex justify-between text-white px-14 items-center">
      <div>
        <h1>Introducción a la Programación con Python</h1>
        <p>
          ¿Deseas aprender Programación para obtener un mejor trabajo o crear
          una idea? ¡Este curso es para ti!
        </p>
        {/*
           //TODO: pasarle una url para redireccionar al usuario al perfil del creador del curso
        */}
        <p>
          Creado por{" "}
          <a className="text-blue-300" href="">
            Cinta Verges
          </a>
        </p>
        <p> price</p>
      </div>
      <div className="w-[400px] bg-white p-1 text-black">
        <Image
          src={"/vercel.svg"}
          alt="image"
          width={200}
          height={200}
          className="w-full object-cover"
        />
        <div>
          <p>$ 2peso</p>
          <div className="flex flex-col gap-1 mt-4">
            <button className="bg-blue-500 p-2 rounded-lg">Buy</button>
            <button className="bg-blue-500 p-2 rounded-lg">Add to cart</button>
            <p className="text-[12px] text-gray-700 text-center border-t-2 py-2">
              Lorem ipsum dolor sit, amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
