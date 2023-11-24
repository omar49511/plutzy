import { MdOndemandVideo } from "react-icons/md";
import Link from "next/link";

export default function ListContent({ Subtema }) {
  return (
    <li className="px-4 py-1 hover:bg-neutral-100">
      <Link className="flex gap-2" href={""}>
        <div className="flex items-center">
          <MdOndemandVideo />
        </div>
        <p>{Subtema}</p>
      </Link>
    </li>
  );
}
