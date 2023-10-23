import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbLogout, TbUserCircle } from "react-icons/tb";

const icons = {
  salida: <TbLogout />,
  usuario: <TbUserCircle />,
};
export default function Dropdown() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="flex items-center px-5 py-3 cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        <Image
          className="rounded-full object-cover w-8 h-8"
          width={32}
          height={32}
          src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?cs=srgb&dl=pexels-ali-pazani-2787341.jpg&fm=jpg"
          alt=""
        />
        <span className="ml-2">omar</span>
        <RiArrowDropDownLine className="text-2xl" />
      </div>
      <div
        className={`${
          open
            ? "absolute top-[70px] right-[400px] bg-white rounded-lg py-[10px] px-[20px] dark:bg-[#212224] z-50 opacity-100 visible transform translate-y-0 transition delay-150 duration-300 ease-in"
            : "absolute top-[70px] right-[400px] bg-white rounded-lg py-[10px] px-[20px] dark:bg-[#212224] z-50 opacity-0 invisible transform -translate-y-[20px] transition delay-150 duration-300 ease-in-out"
        }`}
      >
        <h3 className="text-center">omar</h3>
        <span className="w-full flex justify-center text-gray-500 mb-6">
          Estudiante
        </span>
        <ul>
          <DropdownItem icon={icons.usuario} href="/profile">
            Mi perfil
          </DropdownItem>
          <DropdownItem icon={icons.salida} href="/logout">
            Cerrar sesión
          </DropdownItem>
        </ul>
      </div>
    </>
  );
}
function DropdownItem(props) {
  return (
    <li className="py-2.5 border-t border-gray-300">
      <Link href={props.href}>
        <div className="flex  items-center gap-2">
          {props.icon}
          {props.children}
        </div>
      </Link>
    </li>
  );
}

// className={`${
//   open
//     ? "absolute top-[70px] right-[400px] bg-white rounded-lg py-[10px] px-[20px] dark:bg-[#212224] z-50 opacity-100 visible transform translate-y-0 transition delay-150 duration-300 ease-in-out"
//     : "absolute top-[70px] right-[400px] bg-white rounded-lg py-[10px] px-[20px] dark:bg-[#212224] z-50 opacity-0 invisible transform -translate-y-[-20px] transition delay-150 duration-300 ease-in-out"
// }`}

// className={`${
//   open
//     ? "absolute top-[70px] right-[400px] bg-white rounded-lg py-[10px] px-[20px] dark:bg-[#212224] z-50 opacity-100 visible translate-y-0 transition delay-150 duration-300 ease-in"
//     : "absolute top-[70px] right-[400px] bg-white rounded-lg py-[10px] px-[20px] dark:bg-[#212224] z-50 opacity-0 invisible translate-y-[-20px] transition delay-150 duration-300 ease-in-out"
// }`}
