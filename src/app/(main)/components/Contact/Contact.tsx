"use client";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { useDarkMode } from "@/app/(main)/components/DarkModeProvider";

export default function Contact() {
  const { darkMode } = useDarkMode();
  return (
    <>
      <div
      className={`${
        darkMode == "dark" ? "invert" : ""
      } bg-white bg-opacity-75 rounded-lg text-black xs:text-3xl md:text-5xl space-y-2 md:space-y-6 
    md:mb-10 flex-col items-end justify-end flex  p-1 md:p-4`}
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
