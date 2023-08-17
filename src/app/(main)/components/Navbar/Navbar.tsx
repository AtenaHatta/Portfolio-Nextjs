"use client";
import { MdDarkMode } from "react-icons/md";
import { MdWbSunny } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
import useScrollCheck from "@/hooks/useScrollCheck";
import useActiveSection from "@/hooks/useActiveSection";
import { MdMenu, MdClose } from "react-icons/md";
import { useDarkMode } from "../DarkModeProvider";

export default function Navbar({ darkMode, setDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);;
  const activeSection = useActiveSection(0.5);
  const isScrolled = useScrollCheck();
  

  


  const SCROLLED_COLOR = "black";
  const NOT_SCROLLED_COLOR = "white";

  const navIconStyles = {
    backgroundColor: isScrolled ? SCROLLED_COLOR : NOT_SCROLLED_COLOR,
  };

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: section === 'work'? 'start' : 'center',
      });
      setIsMenuOpen(false);
    } else {
      console.error(`No element found with id ${section}`);
    }
  };  
   

  const toggleNightMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="fixed top-0 w-full z-10 bg-white bg-opacity-75">
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
          <li
            className={`cursor-pointer ${
              activeSection === "home" && "text-[#8C52FF]"
            }`}
            onClick={() => scrollToSection("home")}
          >
            HOME
          </li>
          <li
            className={`cursor-pointer ${
              activeSection === "about" && " text-[#8C52FF]"
            }`}
            onClick={() => scrollToSection("about")}
          >
            ABOUT
          </li>
          <li
            className={`cursor-pointer ${
              activeSection === "skill" && " text-[#8C52FF]"
            }`}
            onClick={() => scrollToSection("skill")}
          >
            SKILL
          </li>
          <li
            className={`cursor-pointer ${
              activeSection === "work" && " text-[#8C52FF]"
            }`}
            onClick={() => scrollToSection("work")}
          >
            WORK
          </li>
          <li>
            <button onClick={toggleNightMode}>
              {darkMode ? <MdWbSunny /> : <MdDarkMode />}
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
