"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import GymLogo from "/public/GymLogo.svg";
import ContainedButton from "./ContainedButton";
import OutlinedButton from "./OutlinedButton";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`flex justify-between items-center px-32 py-4 sticky top-0 z-[100] transition-all ease-linear duration-300 ${
        scrolling ? "bg-[#0D0D0D]" : "bg-transparent"
      }`}
    >
      <div>
        <Image src={GymLogo} className="w-10 h-10"></Image>
      </div>
      <div className={`flex items-center `}>
        <div className={`flex items-center`}>
          <a
            href="#home"
            className={`text-white mx-2 no-underline text-sm transition-all hover:text-primary-default`}
          >
            Home
          </a>
          <a
            href="#program"
            className={`text-white mx-2 no-underline text-sm transition-all hover:text-primary-default`}
          >
            Program
          </a>

          <a
            href="#community"
            className={`text-white mx-2 no-underline text-sm transition-all hover:text-primary-default`}
          >
            Community
          </a>
          <a
            href="#footer"
            className={`text-white mx-2 no-underline text-sm transition-all hover:text-primary-default`}
          >
            About Us
          </a>
        </div>
        <div className="flex items-center ms-1.5">
          <OutlinedButton label={"Login"} extraClassNames={"mx-1"} />
          <ContainedButton label={"Register"} extraClassNames={"mx-1"} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
