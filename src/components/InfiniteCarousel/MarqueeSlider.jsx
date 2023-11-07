export default function MarqueeSlider() {
  return (
    <div className="overflow-hidden">
      <marquee direction="left" scrollamount="10">
        <ul className="flex gap-4  ">
          <li className="shadow-lg shadow-indigo-500/40 bg-[#F5F5F5] whitespace-nowrap shadow-inner px-4 py-2 rounded-md  hover:text-blue-600">
            Quiero aprender a programar con Python
          </li>
          <li className="shadow-lg shadow-indigo-500/40 bg-[#F5F5F5] whitespace-nowrap shadow-inner px-4 py-2 rounded-md  hover:text-blue-600">
            como cambiar de empleo
          </li>
          <li className="shadow-lg shadow-indigo-500/40 bg-[#F5F5F5] whitespace-nowrap shadow-inner px-4 py-2 rounded-md  hover:text-blue-600">
            Crear una página web
          </li>
          <li className="shadow-lg shadow-indigo-500/40 bg-[#F5F5F5] whitespace-nowrap shadow-inner px-4 py-2 rounded-md  hover:text-blue-600">
            quiero perder el miedo a hablar en público
          </li>
          <li className="shadow-lg shadow-indigo-500/40 bg-[#F5F5F5] whitespace-nowrap shadow-inner px-4 py-2 rounded-md  hover:text-blue-600">
            Crear un juego para teléfonos
          </li>
          <li className="shadow-lg shadow-indigo-500/40 bg-[#F5F5F5] whitespace-nowrap shadow-inner px-4 py-2 rounded-md  hover:text-blue-600">
            Quiero aprender a programar
          </li>
          <li className="shadow-lg shadow-indigo-500/40 bg-[#F5F5F5] whitespace-nowrap shadow-inner px-4 py-2 rounded-md  hover:text-blue-600">
            Como hacer análisis de datos
          </li>
          <li className="shadow-lg shadow-indigo-500/40 bg-[#F5F5F5] whitespace-nowrap shadow-inner px-4 py-2 rounded-md  hover:text-blue-600">
            como abordar una negociación
          </li>
          <li className="shadow-lg shadow-indigo-500/40 bg-[#F5F5F5] whitespace-nowrap shadow-inner px-4 py-2 rounded-md  hover:text-blue-600">
            Quiero crear un proyecto en blockchain
          </li>
          <li className="shadow-lg shadow-indigo-500/40 bg-[#F5F5F5] whitespace-nowrap shadow-inner px-4 py-2 rounded-md  hover:text-blue-600">
            Como usar git y github
          </li>
          <li className="shadow-lg shadow-indigo-500/40 bg-[#F5F5F5] whitespace-nowrap shadow-inner px-4 py-2 rounded-md  hover:text-blue-600">
            Quiero aprender a usar servidores
          </li>
        </ul>
      </marquee>
    </div>
  );
}
