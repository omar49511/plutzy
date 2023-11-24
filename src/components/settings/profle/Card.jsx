import Image from "next/image";
import { PiTrashBold } from "react-icons/pi";

import ContentProfile from "./ContentProfile";
import ContentSettings from "./ContentSettings";

export default function Card({ title, content }) {
  return (
    <div className="flex flex-col gap-10">
      <div className="pb-3 bg-neutral-100 border border-neutral-300 rounded-lg">
        <h1 className="p-3 text-lg">{title}</h1>
        <ContentProfile />
      </div>
      <div className="pb-3 bg-neutral-100 border border-neutral-300 rounded-lg">
        <h1 className="p-3 text-lg">{content}</h1>
        <ContentSettings />
      </div>
    </div>
  );
}
