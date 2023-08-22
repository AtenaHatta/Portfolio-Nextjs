"use client";
import React from "react";
import IconsSection from "./IconsWrapper";
import { frontendIcons, backendIcons, otherIcons } from "./Icons";

import { useDarkMode } from "@/app/(main)/components/DarkModeProvider";

export default function Skill({ className = "" }) {
  const { darkMode } = useDarkMode();
  return (
    <section id="skill">
      <div
        className={`${
          darkMode == "dark" ? "invert" : ""
        }  bg-white text-black items-center flex flex-col justify-center px-2 py-12 md:py-0 md:h-[70vh]`}
      >
        <div className={`work ${className}`}>
          <IconsSection title="Frontend" icons={frontendIcons} />

          <div className="flex mt-10">
            <div className="xs:mr-0 md:mr-20">
              <IconsSection title="Backend" icons={backendIcons} />
            </div>

            <div>
              <IconsSection title="Others" icons={otherIcons} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
