import Image from "next/image";
import clsx from "clsx";
import avatarSrc from "./avatarx2.png";
export function Profile({ className, name, rating, avatar = avatarSrc }) {
  return (
    <div
      className={clsx(
        "flex items-center gap-2 text-start text-teal-600",
        className
      )}
    >
      <Image
        src={avatar}
        alt="avatar"
        width={48}
        height={48}
        unoptimized
      ></Image>
      <div className="overflow-hidden">
        <div className="text-lg leading-tight truncate">{name}</div>
        <div className="text-slate-400 text-xs leading-tight">
          Рейтинг: {rating}
        </div>
      </div>
    </div>
  );
}
