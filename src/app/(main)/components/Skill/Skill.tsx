import React from "react";
import IconsSection from "./IconsWrapper";
import { frontendIcons, backendIcons, otherIcons } from "./Icons";

export default function Skill() {
  return (
    <section id="skill">
      <div className="h-[100dvh] text-black items-center flex flex-col justify-center min-h-screen xs:m-5">
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
    </section>
  );
}
