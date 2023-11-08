import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";
import { MdOutlineModeEdit } from "react-icons/md";

export default function Button({ icon, text, href }) {
  return (
    <Link
      href={href}
      className="h-14 py-2 px-3 flex justify-between items-center bg-neutral-100 dark:bg-[#27272a] hover:bg-neutral-300 hover:p-6"
    >
      <div className="flex gap-2">
        <div className="flex items-center">{icon}</div>
        <div>{text}</div>
      </div>
      <div>
        <SlArrowRight />
      </div>
    </Link>
  );
}
