import React from "react";
import IconsSection from "./IconsWrapper";
import { frontendIcons, backendIcons, otherIcons } from "./Icons";


export default function Skill({ className = "" }) {
  return (
    <section id="skill">
      <div
        className="  bg-white text-black items-center flex flex-col justify-center px-2 py-12 md:pb-80 md:pt-40  md:h-full"
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
