import Image from "next/image";
import { PiTrashBold } from "react-icons/pi";

export default function ContentProfile() {
  return (
    <div className="flex gap-6 py-2 px-3">
      <div className="h-24 w-24">
        <Image
          className="rounded-full object-cover w-24 h-24"
          width={96}
          height={96}
          src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?cs=srgb&dl=pexels-ali-pazani-2787341.jpg&fm=jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex gap-1">
          <button className="bg-neutral-300 hover:bg-neutral-400 text-sm">
            <div className="px-2 py-1">Actualizar imagen de perfil</div>
          </button>
          <div className="flex items-center">
            <PiTrashBold />
          </div>
        </div>
        <p className="text-xs">
          El formato debe ser JPEG o PNG y no puede superar los 10 MB.
        </p>
      </div>
    </div>
  );
}
