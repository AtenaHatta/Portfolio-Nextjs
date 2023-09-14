import React from "react";
import IconsSection from "./IconsWrapper";
import { frontendIcons, backendIcons, otherIcons } from "./Icons";

export default function Skill({ className = "" }) {
  return (
    <section id="skill">
      <div className="flex items-center">
        <h1 className="text-6xl md:text-8xl pl-2 text-gray-300">SKILL</h1>
        <div className="border-b text-gray-300" style={{ width: "30%" }}></div>
      </div>
      <div className="bg-white text-black items-center flex flex-col justify-center px-2 pb-32 md:pb-80 pt-2 md:pt-10  md:h-full">
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
