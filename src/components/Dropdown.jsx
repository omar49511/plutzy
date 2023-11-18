"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbLogout, TbUserCircle } from "react-icons/tb";
import { signOut } from "next-auth/react";

const icons = {
  salida: <TbLogout />,
  usuario: <TbUserCircle />,
};
export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  });

  return (
    <div ref={menuRef} className="relative">
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
        <span className="ml-2 ">Cinta Verges</span>
        <RiArrowDropDownLine
          size="1.5rem"
          className={`${open ? "rotate-180" : ""}`}
        />
      </div>
      <div
        className={`${
          open
            ? "absolute top-[70px] right-[20px] w-[200px] bg-white rounded-lg py-[10px] px-[20px] dark:bg-[#212224] opacity-100 visible transform translate-y-0 transition delay-150 duration-300 ease-in-out  before:absolute before:-top-5 before:right-5 before:w-5 before:h-5 before:border-t-transparent before:border-t-solid before:border-r-[20px] before:border-r-transparent before:border-r-solid before:border-b-[20px] before:border-b-solid before:border-l-[20px] before:border-l-transparent before:border-l-solid before:border-b-white before:dark:border-b-[#212224]"
            : "absolute top-[70px] bg-white rounded-lg py-[10px] px-[20px] dark:bg-[#212224]  opacity-0 invisible transform -translate-y-[20px] transition delay-150 duration-300 ease-in-out"
        }`}
      >
        <h3 className="text-center line-clamp-1">Cinta Verges</h3>
        <span className="w-full flex justify-center text-gray-500 mb-6">
          Estudiante
        </span>
        <ul>
          <DropdownItem icon={icons.usuario} href="/profile">
            Mi perfil
          </DropdownItem>
          <li className="py-2.5 border-t border-[#0000000d] dark:border-[#ffffff0d]">
            <button
              className="flex  items-center gap-2"
              onClick={() => signOut()}
            >
              {icons.salida}
              Cerrar sesión
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
function DropdownItem(props) {
  return (
    <li className="py-2.5 border-t border-[#0000000d] dark:border-[#ffffff0d]">
      <Link href={props.href}>
        <div className="flex  items-center gap-2">
          {props.icon}
          {props.children}
        </div>
      </Link>
    </li>
  );
}
