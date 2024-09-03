"use client";

import { useAuth0 } from "@auth0/auth0-react";
import Link from "next/link";
import { Button } from "./ui/button";

const DesktopNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    //       </div>
    //     </SheetContent>
    //   </Sheet>
    // );
    // };

    <div className="flex items-center gap-5">
      <ul className="flex gap-5 items-center font-medium">
        <li>
          <a href="/" className="nav_link_items">
            Home
          </a>
        </li>
        <li>
          <a href="/services" className="nav_link_items">
            Services
          </a>
        </li>
        <li>
          <a href="/about" className="nav_link_items">
            About
          </a>
        </li>
        <li>
          <a href="/contact" className="nav_link_items">
            Contact
          </a>
        </li>
      </ul>
      {isAuthenticated ? (
        <Link href="/user-profile">
          <Button className="bg-cyan-600 hover:bg-cyan-700 text-xl">
            Appoinment
          </Button>
        </Link>
      ) : (
        <Button
          onClick={async () => loginWithRedirect()}
          className="bg-cyan-600 hover:bg-cyan-700 text-xl"
        >
          Log In
        </Button>
      )}
    </div>
  );
};

export default DesktopNav;
