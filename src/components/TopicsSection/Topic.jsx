"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SiJavascript, SiReact, SiCss3, SiHtml5 } from "react-icons/si";
import { Antic_Slab } from "next/font/google";

const antic_slab = Antic_Slab({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  initial2: {
    x: 500,
    opacity: 0,
  },
  animate2: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export default function Topic() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="max-w-5xl mx-auto  snap-center">
      <h2 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white py-20">
        Dominando el Arte del Desarrollo Web.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <motion.div
          variants={variants}
          initial="initial"
          // whileInView={}
          ref={ref}
          animate={isInView && "animate"}
          className="bg-white rounded-lg flex p-5 drop-shadow-lg"
        >
          <div className="w-[20%]">
            <SiJavascript className="text-4xl  text-[#00668c]"></SiJavascript>
          </div>
          <div className="w-[74%]">
            <h3 className="text-[20px] font-extrabold  ">JavaScript</h3>
            <p>
              Desde las bases hasta las técnicas avanzadas, adéntrate en el
              lenguaje de programación más utilizado en el desarrollo web.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={variants}
          initial="initial2"
          // whileInView={}
          ref={ref}
          animate={isInView && "animate2"}
          className="bg-white rounded-lg flex p-5 drop-shadow-lg"
        >
          <div className="w-[20%]">
            <SiReact className="text-4xl text-[#00668c]"></SiReact>
          </div>
          <div className="w-[74%]">
            <h3 className="text-[20px] font-extrabold">React Js</h3>
            <p>
              Aprende a construir aplicaciones web dinámicas e interactivas
              utilizando esta popular biblioteca de JavaScript.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={variants}
          initial="initial"
          // whileInView={}
          ref={ref}
          animate={isInView && "animate"}
          className="bg-white rounded-lg flex p-5 drop-shadow-lg"
        >
          <div className="w-[20%]">
            <SiHtml5 className="text-4xl  text-[#00668c]"></SiHtml5>
          </div>
          <div className="w-[74%]">
            <h3 className="text-[20px] font-extrabold">HTML</h3>
            <p>
              Aprende HTML para crear páginas web sólidas y bien estructuradas,
              la base de toda la programación web.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={variants}
          initial="initial2"
          // whileInView={}
          ref={ref}
          animate={isInView && "animate2"}
          className="bg-white rounded-lg flex p-5 drop-shadow-lg"
        >
          <div className="w-[20%]">
            <SiCss3 className="text-4xl  text-[#00668c]"></SiCss3>
          </div>
          <div className="w-[74%]">
            <h3 className="text-[20px] font-extrabold">CSS</h3>
            <p>
              Domina CSS para dar vida a tus páginas web con diseños atractivos
              y elegantes.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
