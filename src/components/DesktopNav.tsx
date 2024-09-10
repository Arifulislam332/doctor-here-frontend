"use client";

import { useAuth0 } from "@auth0/auth0-react";
import Link from "next/link";
import { Button } from "./ui/button";

const DesktopNav = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <div className="flex items-center gap-5">
      <ul className="flex gap-5 items-center font-medium">
        <li>
          <Link
            className="hover:text-cyan-600 duration-300 ease-in-out"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-cyan-600 duration-300 ease-in-out"
            href="/services"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-cyan-600 duration-300 ease-in-out"
            href="/user-appoinment"
          >
            Appoinment
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-cyan-600 duration-300 ease-in-out"
            href="/about"
          >
            About
          </Link>
        </li>
      </ul>
      {isAuthenticated ? (
        <Button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
          className="bg-cyan-600 hover:bg-cyan-700 font-bold"
        >
          Log Out
        </Button>
      ) : (
        <Button
          onClick={async () => loginWithRedirect()}
          className="bg-cyan-600 hover:bg-cyan-700 font-bold"
        >
          Log In
        </Button>
      )}
    </div>
  );
};

export default DesktopNav;
