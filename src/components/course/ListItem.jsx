import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import ListContent from "./ListContent";

export default function ListItem() {
  return (
    <li>
      <div className="flex justify-between items-center text-xl p-2">
        <p>Introducción</p>
        <MdKeyboardArrowDown />
      </div>
      <div>
        <ul>
          <ListContent Subtema={"Hola mundo"} />
          <ListContent Subtema={"Hola mundo"} />
          <ListContent Subtema={"Hola mundo"} />
        </ul>
      </div>
    </li>
  );
}

// import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

// import ListItem from "./ListItem";
// import { useEffect, useRef, useState } from "react";

// export default function List() {
//   const [open, setOpen] = useState(false);
//   const menuRef = useRef();
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!menuRef.current.contains(event.target)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//   });
//   return (
//     <div className="relative" ref={menuRef}>
//       <div
//         className=""
//         onClick={() => {
//           setOpen(!open);
//         }}
//       >
//         <li className="flex justify-between items-center text-xl p-2">
//           <p>Introducción</p>
//           <MdKeyboardArrowDown className={`${open ? "rotate-180" : ""}`} />
//         </li>
//       </div>
//       <div
//         className={`${
//           open
//             ? "top-[70px] opacity-100 visible"
//             : "top-[70px] opacity-0 invisible"
//         }`}
//       >
//         <ul>
//           <li>Video 1</li>
//           <li>Video 2</li>
//           <li>Video 3</li>
//         </ul>
//       </div>
//       <div
//         className=""
//         onClick={() => {
//           setOpen(!open);
//         }}
//       >
//         <li className="flex justify-between items-center text-xl p-2">
//           <p>Introducción</p>
//           <MdKeyboardArrowDown className={`${open ? "rotate-180" : ""}`} />
//         </li>
//       </div>
//       <div
//         className={`${
//           open
//             ? "absolute top-[70px] right-[20px] opacity-100 visible"
//             : "absolute top-[70px] opacity-0 invisible"
//         }`}
//       >
//         <ul>
//           <li>Video 1</li>
//           <li>Video 2</li>
//           <li>Video 3</li>
//         </ul>
//       </div>
//     </div>
//     // <ul>
//     //   <ListItem />
//     //   <ListItem />
//     //   <ListItem />
//     //   <ListItem />
//     //   <ListItem />
//     //   <li>Tipos básicos</li>
//     //   <li>Control de flujo</li>
//     //   <li>Funciones</li>
//     //   <li>Tipos avanzados</li>
//     //   <li>clases</li>
//     //   <li>Excepciones</li>
//     //   <li>Módulos</li>
//     //   <li>Rutas y direcciones</li>
//     // </ul>
//   );
// }
