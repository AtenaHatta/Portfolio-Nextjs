"use client";
import "./navLinkLineStyle.css";
import { MdDarkMode } from "react-icons/md";
import { MdWbSunny } from "react-icons/md";
import { useState } from "react";
import useScrollCheck from "@/hooks/useScrollCheck";
import useActiveSection from "@/hooks/useActiveSection";
import { MdMenu, MdClose } from "react-icons/md";
import { useDarkMode } from "@/app/(main)/components/DarkModeProvider";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection(0.5);
  const isScrolled = useScrollCheck();
  const SCROLLED_COLOR = "black";
  const NOT_SCROLLED_COLOR = "white";

  const { darkMode, setDarkMode } = useDarkMode();

  const navIconStyles = {
    backgroundColor: isScrolled ? SCROLLED_COLOR : NOT_SCROLLED_COLOR,
  };

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);

    if (element) {
      const rect = element.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const targetPosition = rect.top + scrollTop - 80;  

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      setIsMenuOpen(false);
    } 
};


  const toggleNightMode = () => {
    setDarkMode(darkMode == "light" ? "dark" : "light");
  };

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav>
      <div
        className={`${
          darkMode == "dark" ? "invert" : ""
        } fixed top-0 w-full z-10 bg-white bg-opacity-75`}
      >
        {/* hamburger menu */}
        <div className="flex justify-end items-center md:hidden fixed z-50 right-3 top-3">
          <div className=" p-2">
            <button aria-label="hamburgerMenuBtn" onClick={handleMenuClick}>
              {isMenuOpen ? (
                <MdClose className="text-4xl cursor-pointer lineStyle bg-opacity-75 bg-white" />
              ) : (
                <MdMenu className="text-4xl cursor-pointer bg-opacity-75 bg-white" />
              )}
            </button>
          </div>
        </div>

        {/* hamburger menu item */}
        <div className="flex justify-end w-full md:max-w-[1560px] md:mx-auto md:justify-end items-center content-center md:p-5 ">
          <ul
            className={` md:pr-5 font-yesevaOne md:flex  text-xl md:text-lg md:space-x-10
        ${
          isMenuOpen
            ? "flex flex-col gap-12 justify-center items-center w-screen h-[100dvh] bg-white text-black text-center z-20 "
            : "hidden"
        } `}
          >
            <li
              className={`cursor-pointer lineStyle ${
                activeSection === "home" && "text-"
              }`}
              onClick={() => scrollToSection("home")}
            >
              HOME
            </li>
            <li
              className={`cursor-pointer lineStyle ${
                activeSection === "about" && " text-mainColor"
              }`}
              onClick={() => scrollToSection("about")}
            >
              ABOUT
            </li>
            <li
              className={`cursor-pointer lineStyle ${
                activeSection === "skill" && " text-mainColor"
              }`}
              onClick={() => scrollToSection("skill")}
            >
              SKILL
            </li>
            <li
              className={`cursor-pointer lineStyle ${
                activeSection === "work" && " text-mainColor"
              }`}
              onClick={() => scrollToSection("work")}
            >
              WORK
            </li>
            {/* <li
              className={`cursor-pointer lineStyle ${
                activeSection === "100" && " text-mainColor"
              }`}
              onClick={() => scrollToSection("100")}
            >
              100
            </li> */}
            <li>
              <button aria-label="darkModeBtn" onClick={toggleNightMode}>
                {darkMode == "dark" ? <MdWbSunny /> : <MdDarkMode />}
              </button>
            </li>
            <li className="block md:hidden">
              <a
                className="bg-black text-white xs:w-[130px] md:w-auto xs:py-2 md:py-2 xs:px-4
                         md:px-4 border-2 border-white hover:bg-white hover:text-black hover:border-black rounded-sm"
                href="/resume/resume_AtenaHatta.pdf"
                target="_blank"
                aria-label="resume"
                rel="noopener noreferrer"
              >
                RESUME
              </a>
            </li>
          </ul>
          <a
            className="bg-black  text-white xs:w-[130px] md:w-auto xs:py-2 md:py-2 xs:px-1 hidden md:block
                         md:px-4 border-2 border-white hover:bg-white hover:text-black hover:border-black rounded-sm"
            href="/resume/resume_AtenaHatta.pdf"
            target="_blank"
            aria-label="resume"
            rel="noopener noreferrer"
          >
            RESUME
          </a>
        </div>
      </div>
    </nav>
  );
}
