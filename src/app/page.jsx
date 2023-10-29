import BackgroundRadialLeft from "@/components/BackgroundRadialLeft/BackgroundRadialLeft";
import BackgroundRadialRight from "@/components/BackgroundRadialRight/BackgroundRadialRight";

import CardPrice from "@/components/Cards/CardPrice";

export default function page() {
  const data = [
    {
      title: "Gratis",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: "$0.00 ",
    },
    {
      title: "Premium",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: "$99",
    },
  ];

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
      <section className=" h-screen bg-purple-500 flex items-center snap-proximity snap-y">
        <div className="max-w-5xl mx-auto flex items-center bg-indigo-500 snap-center">
          <div>
            <h1 className="text-[50px]">Pecios</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              incidunt officiis dolor aliquam iusto nihil. Fugiat a aperiam
              voluptas sapiente, ipsum aut autem dolores numquam tempora rerum
              asperiores ab similique pariatur cumque iste!
            </p>
          </div>
          <div className="flex gap-4">
            {data.map((d, index) => (
              <CardPrice
                key={d.title + index}
                title={d.title}
                price={d.price}
                description={d.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
