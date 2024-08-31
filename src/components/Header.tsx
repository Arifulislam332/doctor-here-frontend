import Link from "next/link";
import HeaderInfo from "./HeaderInfo";
import { Separator } from "./ui/separator";
import Image from "next/image";
import logo from "../app/fav-icon.png";
import { AlignJustify } from "lucide-react";

const Header = () => {
  return (
    <header className="flex flex-col">
      <HeaderInfo />
      <Separator />
      <div className="flex justify-between items-center gap-10 container mx-auto py-3">
        <Link href="/" className="flex gap-2 items-center">
          <div className="w-16 h-16 overflow-hidden rounded-full">
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

        <button>
          <AlignJustify className="text-cyan-600" />
        </button>
      </div>
      <Separator />
    </header>
  );
};

export default Header;
