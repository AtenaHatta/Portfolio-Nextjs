import { SiNextdotjs, SiReact, SiTypescript } from "react-icons/si";
import { useDarkMode } from "@/app/(main)/components/DarkModeProvider";
import "./heroStyle.css";

export default function Hero() {
  const { darkMode } = useDarkMode();
  return (
    <section id="home" className={`${
      darkMode == "dark" ? "invert" : ""
    }`}>
      <div className="w-full h-[100vh]   relative ">
        <div className="flex w-full h-full items-center text-white">
          <div className="font-yesevaOne ml-1 md:ml-10">
            <h1 className="text-7xl ">
              Hi, I&apos;m{" "}
              <span
                className="block md:inline text-5xl md:text-7xl"
              >
                ATENA HATTA
              </span>
            </h1>
            <h1 className="text-5xl md:text-7xl text-white">
              <span className="block md:inline text-5xl md:text-7xl">
                A developer{" "}
              </span>
              with drive
            </h1>
            <h2 className="flex text-base md:text-7xl animate-typewriter text-white tracking-tighter">
              Coding dreams into reality
            </h2>
            <div className="text-sm md:text-2xl my-1 md:my-4 text-white">
              <h3>
                I stay up-to-date with{" "}
                <span className="block md:inline">
                  the latest technologies to create
                </span>
              </h3>
              <h3>
                user-centric applications with{" "}
                <div className="relative  inline-block">
                  <span className="absolute inset-x-0 bottom-1 h-2 bg-violet-600 opacity-50" />
                  <p className="relative">great performance and usability</p>
                </div>
              </h3>
            </div>
            <div className="flex mt-4 space-x-4">
              <SiReact className="w-12 h-12 md:w-14 md:h-14 spin text-mainColor" />
              <SiNextdotjs className="w-12 h-12 md:w-14 md:h-14" />
              <SiTypescript className="w-12 h-12 md:w-14 md:h-14" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
