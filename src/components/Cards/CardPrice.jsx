import Image from "next/image";

export default function CardPrice(props) {
  const { title, price, description } = props;

  return (
    <section className=" relative h-screen bg-[#00668c] flex items-center snap-proximity snap-y -z-0">
      <div>
        <Image
          className="absolute top-[-138px] right-[30px] h-56 w-auto"
          width={300}
          height={80}
          src="/how-we-work-abstraction-1.svg"
          alt="hombre sentado"
        />
      </div>
      <div className="max-w-5xl mx-auto flex items-center  snap-center">
        <div className="w-[50%]">
          <h2 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight dark:text-white pb-5">
            Elige un plan que se ajuste a ti
          </h2>

          <p className="text-[20px] text-slate-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            incidunt officiis dolor aliquam iusto nihil.
          </p>
        </div>
        <div className="w-[50%] relative">
          <div className="flex gap-4 w-[500px] h-96 z-[10] drop-shadow-xl">
            <div className="rounded-lg w-[16.25rem] px-[10px] py-[20px] my-[10px] text-center flex justify-around flex-col items-center cursor-pointer bg-white ">
              <div className="p-[20px]">
                <div className="font-extrabold uppercase text-[#1b1b1ba3] text-2xl mt-[.625rem] tracking-wide">
                  Gratis
                </div>
                <div className="text-black font-extrabold text-[50px] drop-shadow-2xl">
                  $ 0.00
                </div>
                <div className="text-[rgba(46,39,39,0.6)] mt-[10px] text-[14px]">
                  <p className=" whitespace-nowrap">
                    - Acceso a videos gratuitos
                  </p>
                  <p className=" whitespace-nowrap">
                    - Acceso a material descargable
                  </p>
                </div>
              </div>
              <button className="rounded-lg bg-[#00668C] text-white w-full h-10">
                Buy now
              </button>
            </div>
          </div>
          <div className="flex gap-4 w-[500px] h-[350px] absolute top-4 -right-[248px] -z-10 drop-shadow-xl">
            <div className="rounded-r-lg w-[16.25rem] px-[10px] py-[20px] my-[10px] text-center flex justify-around flex-col items-center cursor-pointer bg-[#71C4EF]">
              <div className="p-[20px]">
                <div className="font-extrabold uppercase text-[#ffffffa3] text-2xl mt-[.625rem] tracking-wide">
                  Premium
                </div>
                <div className="text-white font-extrabold text-[50px] drop-shadow-2xl">
                  $ 95.00
                </div>
                <div className="text-[rgba(27,27,27,0.6)] mt-[10px] text-[14px]">
                  <p className=" whitespace-nowrap">
                    - Acceso a videos gratuitos
                  </p>
                  <p className=" whitespace-nowrap">
                    - Acceso a material descargable
                  </p>
                </div>
              </div>
              <button className="rounded-lg bg-[#00668C] text-white w-full h-10">
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
/* {data.map((d, index) => (
  <CardPrice
  key={d.title + index}
  title={d.title}
  price={d.price}
  description={d.description}
/>
))}*/
