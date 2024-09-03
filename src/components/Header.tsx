"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../app/fav-icon.png";
import DesktopNav from "./DesktopNav";
import HeaderInfo from "./HeaderInfo";
import MobileNav from "./MobileNav";
import { Separator } from "./ui/separator";

const Header = () => {
  return (
    <header className="flex flex-col h-[118px] items-center bg-white">
      <HeaderInfo />
      <Separator />
      <div className="flex justify-between items-center container mx-auto py-3 px-10 md:px-0">
        <Link href="/" className="flex gap-2 items-center">
          <div className="w-12 h-12 overflow-hidden rounded-full">
            <Image
              src={logo}
              alt="Doctor-Here"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold">
            Doctor <span className="text-cyan-600">here</span>
          </h3>
        </Link>

        <div className="hidden md:block">
          <DesktopNav />
        </div>
        <div className="md:hidden block">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
