import BackgroundRadialLeft from "@/components/BackgroundRadialLeft/BackgroundRadialLeft";
import BackgroundRadialRight from "@/components/BackgroundRadialRight/BackgroundRadialRight";
import Link from "next/link";

export default function page() {
  return (
    <>
      <BackgroundRadialRight />
      <BackgroundRadialLeft />
      <section>
        <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
          <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
            Para todos tus retos prepárate en{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              plutzy.
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
            La comunidad de aprendizaje en línea donde desarrollas tus
            habilidades y potencias tu crecimiento profesional.
          </p>
        </div>
        <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
          <div className="flex flex-col justify-center">
            <video className="rounded-lg" autoPlay loop muted>
              <source src="/136268.mp4" type="video/mp4"></source>
            </video>
          </div>
        </div>
      </section>
    </>
  );
}
