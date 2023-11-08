import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";
import {
  MdOutlineModeEdit,
  MdOutlinePayment,
  MdOutlineListAlt,
} from "react-icons/md";
import { TbBusinessplan } from "react-icons/tb";
import { RiLockPasswordLine } from "react-icons/ri";
import { PiBellSimpleRingingBold, PiListDashesBold } from "react-icons/pi";
import Button from "./button";

export default function Card() {
  const dataAccount = [
    {
      icon: <TbBusinessplan />,
      text: "Administra tu plan",
      link: "/settings",
    },
    {
      icon: <MdOutlineModeEdit />,
      text: "Editar perfil",
      link: "/settings",
    },
  ];

  const dataPayment = [
    {
      icon: <MdOutlineListAlt />,
      text: "Historial de pedidos",
      link: "/settings",
    },
    {
      icon: <MdOutlinePayment />,
      text: "Tarjetas de pago guardadas",
      link: "/settings",
    },
  ];

  const dataSecurity = [
    {
      icon: <RiLockPasswordLine />,
      text: "Cambiar contraseña",
      link: "/settings",
    },
    {
      icon: <PiBellSimpleRingingBold />,
      text: "Configurar notificaciones", // ! recortado por tiempo
      link: "/settings",
    },
    {
      icon: <PiListDashesBold />,
      text: "Métodos para iniciar sesión",
      link: "/settings",
    },
  ];

  return (
    <div className="flex flex-col gap-10">
      <div className="pb-3 bg-neutral-100 border border-neutral-300 rounded-lg">
        <h1 className="p-3 text-lg">Cuenta</h1>
        {dataAccount.map((btn, index) => (
          <Button key={index} icon={btn.icon} text={btn.text} href={btn.link} />
        ))}
      </div>
      <div className="pb-3 bg-neutral-100 border border-neutral-300 rounded-lg">
        <h1 className="p-3 text-lg">Pago</h1>
        {dataPayment.map((btn, index) => (
          <Button key={index} icon={btn.icon} text={btn.text} href={btn.link} />
        ))}
      </div>
      <div className="pb-3 bg-neutral-100 border border-neutral-300 rounded-lg">
        <h1 className="p-3 text-lg">Seguridad y privacidad</h1>
        {dataSecurity.map((btn, index) => (
          <Button key={index} icon={btn.icon} text={btn.text} href={btn.link} />
        ))}
      </div>
    </div>
  );
}
