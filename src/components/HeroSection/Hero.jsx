import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className=" pt-[140px] pb-[40px] ">
      <div className="relative max-w-5xl m-auto h-[500px] pt-10 -z-10">
        <h1 className="text-[#1d1c1c] font-extrabold text-4xl sm:text-5xl lg:text-[4rem] max-w-3xl dark:text-white">
          Para todos tus retos prepárate en{" "}
          <span className="text-[#00668C]">plutzy.</span>
        </h1>
        <p className="text-[16px] text-slate-600 max-w-[400px] mt-[15px] mb-[40px] dark:text-slate-400">
          La comunidad de aprendizaje en línea donde desarrollas tus habilidades
          y potencias tu crecimiento profesional.
        </p>
        <div className="">
          <a
            className="rounded-lg bg-[#00668C] text-white px-8 py-4 text-base"
            href=""
          >
            Contactanos
          </a>
        </div>
        <Image
          className="absolute h-[570px] w-auto bottom-[-100px] right-[-120px] "
          src="/HeroImage.svg"
          alt="hero"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
}
