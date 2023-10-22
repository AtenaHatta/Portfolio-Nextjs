"use client";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { useDarkMode } from "@/app/(main)/components/DarkModeProvider";

export default function Contact() {
  const { darkMode } = useDarkMode();
  return (
    <>
      <div
        className={`bg-opacity-50 rounded-lg text-black xs:text-3xl md:text-4xl md:space-y-4 
    md:mb-10 flex-col items-end justify-end flex p-1 md:p-1 bg-white fixed z-50 right-0 bottom-0 ${
      darkMode == "dark" ? "invert" : ""
    } `}
      >
        <a
          href="https://github.com/AtenaHatta"
          aria-label="github"
          className="rightmenu-icon2 hover:bg-black hover:text-white rounded-md"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/atenahatta/"
          aria-label="linkedin"
          className="rightmenu-icon2 hover:bg-black hover:text-white rounded-md"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="mailto:hattaatena@hotmail.com"
          aria-label="email"
          className="rightmenu-icon2 hover:bg-black hover:text-white rounded-md"
        >
          <HiOutlineMail />
        </a>
      </div>
    </>
  );
}
