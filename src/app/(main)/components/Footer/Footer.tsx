"use client"
import { useDarkMode } from "@/app/(main)/components/DarkModeProvider";

export default function Footer() {
  const { darkMode } = useDarkMode();
  return (
    <div className={`${
      darkMode == "dark" ? "invert" : ""
    } py-10 md:py-14 bg-black w-full h-[50px] md:h-[100px] flex border-t-2 items-center justify-center`}>
      <h1 className="text-white super-wide text-sm md:text-lg font-yesevaOne">ATENA HATTA</h1>
    </div>
  );
}
