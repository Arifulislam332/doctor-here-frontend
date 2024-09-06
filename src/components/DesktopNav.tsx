"use client";

import { useAuth0 } from "@auth0/auth0-react";
import Link from "next/link";
import { Button } from "./ui/button";

const DesktopNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <div className="flex items-center gap-5">
      <ul className="flex gap-5 items-center font-medium">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
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
