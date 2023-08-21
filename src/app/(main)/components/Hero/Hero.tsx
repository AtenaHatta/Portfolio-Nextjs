"use client";
import { SiReact, SiTypescript } from "react-icons/si";
import { useDarkMode } from "@/app/(main)/components/DarkModeProvider";
import "./heroStyle.css";

export default function Hero() {
  const { darkMode } = useDarkMode();

  return (
    <section id="home">
      <div
        className={` ${
          darkMode == "dark" ? "invert" : ""
        }  flex h-[105dvh] items-center bg-white`}
      >
        <div className="font-yesevaOne ml-1 md:ml-10">
          <h1 className="text-7xl">
            Hi, I&apos;m{" "}
            <span className="block md:inline text-5xl md:text-7xl">
              ATENA HATTA
            </span>
          </h1> 
          <h1 className="text-5xl md:text-7xl text-[#3b3a3a]">
            <span className="block md:inline text-6xl md:text-5xl">
              A developer{" "}
            </span>
            with drive
          </h1>
          <h3 className="flex text-xl md:text-xl animate-typewriter text-[#6b6a6a]">
            Coding dreams into reality
          </h3>
          <div className="text-base md:text-xl my-1 md:my-4 text-[#383838]">
            <h2>
              I stay up-to-date with{" "}
              <span className="block md:inline">
                the latest technologies to create
              </span>
            </h2>
            <h2>
              user-centric applications with
              <span className="block md:inline">
                {" "}
                great performance and usability
              </span>
            </h2>
          </div>
          <div className="flex mt-4 space-x-4">
            <SiReact className="w-12 h-12 md:w-14 md:h-14 spin text-mainColor" />
            <SiTypescript className="w-12 h-12 md:w-14 md:h-14" />
          </div>
        </div>
      </div>
    </section>
  );
}
