'use client'

import { MdDarkMode } from "react-icons/md";
import { MdWbSunny } from "react-icons/md";
import { useState } from "react";
import About from "../../about/page";
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
    <div className={isNightMode ? "night-mode" : "day-mode"}>
      {/* hamburger menu */}
      <div className="flex justify-end items-center">
        <div className="md:hidden m-2">
          <button onClick={handleMenuClick}>
            {isMenuOpen ? (
              <MdClose className="text-4xl cursor-pointer" />
            ) : (
              <MdMenu className="text-4xl cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      {/* hamburger menu item */}
      <ul
        className={`md:flex justify-end my-10 md:mr-40 text-lg items-center text-center xs:space-y-10
         md:space-x-10 first-letter:first-line
        ${isMenuOpen ? "block" : "hidden"} `}
      >
        <li className="bg-black  text-white xs:py-2 md:py-2 xs:px-1 md:px-4">
          <Link href="../public/images/resume_atenahatta.pdf">RESUME</Link>
        </li>
        <li>
          <Link href="/about">ABOUT
            {/* <About isNightMode={isNightMode} /> */}
          </Link>
        </li>
        <li>
          <Link href="/skill">SKILL</Link>
        </li>
        <li>
          <Link href="/work">WORK</Link>
        </li>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <button className="btn-DarkMode" onClick={toggleNightMode}>
            {isNightMode ? <MdWbSunny /> : <MdDarkMode />}
          </button>
        </li>
      </ul>
    </div>
  );
}
