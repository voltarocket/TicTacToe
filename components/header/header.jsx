import Image from "next/image";
import { Profile } from "../profile";
import LogoSrc from "./logo.svg";
import { ArrowDown } from "./arrow-down-icon";

export function Header() {
  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-lg">
      <Image src={LogoSrc} alt="logo" />
      <div className="w-px h-8 bg-slate-200 mx-6" />
      <button className="w-44 bg-teal-600 text-white rounded-lg px-5 py-2 text-2xl leading-tight hover:bg-teal-500 transition-colors">
        Играть
      </button>
      <button className="ml-auto flex items-center gap-2 text-start text-teal-600 hover:text-teal-500 transition-colors">
        <Profile />
        <ArrowDown />

      </button>
    </header>
  );
}
