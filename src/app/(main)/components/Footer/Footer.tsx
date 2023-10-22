"use client";
import { AiFillGithub } from "react-icons/ai";
import { useDarkMode } from "@/app/(main)/components/DarkModeProvider";

export default function Footer() {
  const date = new Date().getFullYear();
  const { darkMode } = useDarkMode();

  return (
    <div className={`${
      darkMode == "dark" ? "invert" : ""
    } text-white bg-transparent h-[100vh] w-full flex items-center text-center justify-center`}>
      <div className="flex-row text-white">
        <h1 className="text-2xl md:text-4xl font-yesevaOne">ATENA HATTA</h1>
        <p className="text-xs md:text-lg">All rights reserved &copy; {date} by Atena Hatta</p>
        <div className="flex items-center text-center justify-center">
          <a
            href="https://github.com/AtenaHatta/Portfolio-Nextjs"
            className="flex items-center justify-center mt-3 py-1 px-5 border border-transparent hover:border-white rounded-md"
          >
            <AiFillGithub className="text-5xl pr-2" />
            <span className="text-xl">Portfolio</span>
          </a>
        </div>
      </div>
    </div>
  );
}
