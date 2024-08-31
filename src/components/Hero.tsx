"use client";

import Link from "next/link";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="h-[calc(100vh-118px)] w-full relative">
      <video
        autoPlay
        loop
        muted
        src={require("../../public/video.mp4")}
        className="w-full h-full object-cover"
      />
      <div className="absolute z-[1] top-0 right-0 left-0 bottom-0 w-full h-full bg-black/20"></div>

      <div className="absolute z-[2] top-0 right-0 left-0 bottom-0 flex flex-col gap-5 justify-center text-white container mx-auto items-start">
        <h1 className="text-6xl font-bold">Your Health, Our Priority</h1>
        <p className="text-xl">
          At Doctor here, we’re dedicated to providing exceptional healthcare
          with a personal touch. Whether you need a routine check-up or
          specialized treatment, our experienced team is here to support your
          journey to better health. Schedule your appointment today and
          experience the difference.
        </p>
        <Link href="/user-profile">
          <Button className="bg-cyan-600 hover:bg-cyan-700">Appoinment</Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
