import { Sheet } from "./ui/sheet";
import { Menu } from "lucide-react";
import {
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import Link from "next/link";

const MobileNav = () => {
  const { isAuthenticated, loginWithRedirect, user, logout } = useAuth0();

  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={20} className="text-cyan-600" />
      </SheetTrigger>
      <SheetContent className="space-y-5">
        <SheetTitle>
          {isAuthenticated ? (
            <span className="font-bold hover:text-cyan-500 flex items-center gap-2">
              <Avatar>
                <AvatarImage src={user?.picture} />
                <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
              </Avatar>
              <span>{user?.name}</span>
            </span>
          ) : (
            <span>Navigation</span>
          )}
        </SheetTitle>
        <SheetDescription className="flex flex-col gap-5 w-full">
          <Link
            className=" bg-gray-100 px-5 py-2 rounded-lg hover:bg-gray-200 hover:text-cyan-600 duration-300 ease-in-out"
            href="/"
          >
            Home
          </Link>

          <Link
            className=" bg-gray-100 px-5 py-2 rounded-lg hover:bg-gray-200 hover:text-cyan-600 duration-300 ease-in-out"
            href="/user-appoinment"
          >
            Appoinment
          </Link>

          {/* BUTTON */}
          {isAuthenticated ? (
            <Button
              onClick={() => logout()}
              className="flex-1 bg-cyan-600 hover:bg-cyan-700 font-bold"
            >
              Log Out
            </Button>
          ) : (
            <Button
              onClick={async () => loginWithRedirect()}
              className="bg-cyan-600 hover:bg-cyan-700 font-bold flex-1"
            >
              Log In
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
