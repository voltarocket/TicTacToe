import Image from "next/image";
import avatarSrc from "../profile/avatarx2.png"

export function Profile(){
    return (
        <div className=" flex items-center gap-2 text-start text-teal-600">
        <Image src={avatarSrc} alt="avatar" width={48} height={48} unoptimized></Image>
        <div>
          <div className=" text-lg leading-tight">Paromovevg</div>
          <div className="text-slate-400 text-xs leading-tight">Рейтинг: 1230</div>
        </div>
      </div>
    )
}