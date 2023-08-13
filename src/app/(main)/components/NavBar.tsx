"use client";

import { MdDarkMode } from "react-icons/md";
import { MdWbSunny } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";

import { MdMenu, MdClose } from "react-icons/md";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode((prevState) => !prevState);
  };

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div
      className={` ${
        isNightMode ? "night-mode" : "day-mode"
      } fixed top-0 w-full z-10 bg-white bg-opacity-75`}
    >
      {/* hamburger menu */}
      <div className="flex justify-end items-center md:hidden fixed z-50 right-3 top-3">
        <div className=" p-2">
          <button onClick={handleMenuClick}>
            {isMenuOpen ? (
              <MdClose className="text-4xl cursor-pointer bg-opacity-75 bg-white" />
            ) : (
              <MdMenu className="text-4xl cursor-pointer bg-opacity-75 bg-white" />
            )}
          </button>
        </div>
      </div>

      {/* hamburger menu item */}
      <div>
        <ul
          className={`md:flex md:justify-end md:pt-5 md:mr-16 text-xl md:text-lg smXl:space-x-8  items-center 
        ${
          isMenuOpen
            ? "block absolute w-full h-[100dvh] smXl:h-full bg-white text-black text-center z-20 space-y-14 pt-20"
            : "hidden"
        } `}
        >
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SKILL</li>
          <li>WORK</li>
          <li>
            <button onClick={toggleNightMode}>
              {isNightMode ? <MdWbSunny /> : <MdDarkMode />}
            </button>
          </li>
          <li className="bg-black mx-auto text-white xs:w-[130px] md:w-auto xs:py-2 md:py-2 xs:px-1 md:px-4 border-2 border-white hover:bg-white hover:text-black hover:border-black rounded-sm">
            <Link href="/resume_AtenaHatta.pdf">RESUME</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
