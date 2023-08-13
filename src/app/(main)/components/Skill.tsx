import React from "react";
import {
  SiDocker,
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiExpress,
  SiNodedotjs,
  SiFigma,
  SiGit,
  SiTailwindcss,
  SiRedux,
  SiSass,
  SiMongodb,
  SiBootstrap,
  SiTypescript,
  SiMui,
  SiVercel,
  SiNetlify,
  SiNextdotjs,
} from "react-icons/si";

const frontendIcons = [
  { icon: SiReact, name: "React" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiNextdotjs, name: "Nextjs" },
  { icon: SiRedux, name: "Redux" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiHtml5, name: "HTML" },
  { icon: SiCss3, name: "CSS" },
  { icon: SiSass, name: "Sass" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiBootstrap, name: "Bootstrap" },
  { icon: SiMui, name: "MaterialUI" },
];

const backendIcons = [
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiExpress, name: "Express" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiDocker, name: "Docker" },
];

const otherIcons = [
  { icon: SiGit, name: "Git" },
  { icon: SiFigma, name: "Figma" },
  { icon: SiVercel, name: "Vercel" },
  { icon: SiNetlify, name: "Netlify" },
];

export default function Skill() {
  return (
<div className="text-black items-center flex flex-col justify-center min-h-screen xs:m-5">
      <div>
        <h2 className="text-xl">Frontend</h2>
        <div className="flex bg-[#e8e8e8a7] rounded-lg justify-center m-2 xs:p-1 md:p-5 flex-wrap">
          {frontendIcons.map((item, index) => (
            <div key={index} className="flex flex-col justify-center items-center xs:px-5 xs:py-3 md:px-5 xs:w-16 md:w-24 text-center">
              {React.createElement(item.icon, { className: "xs:text-4xl md:text-5xl p-1" })}
              <span className="text-xs">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex mt-10">
        <div className="xs:mr-0 md:mr-20">
          <h2 className="text-xl">Backend</h2>
          <div className="flex bg-[#e8e8e8a7] rounded-lg m-2 xs:p-1 md:p-5 flex-wrap">
            {backendIcons.map((item, index) => (
              <div key={index} className="flex flex-col justify-center items-center xs:p-3 md:px-5 xs:w-16 md:w-24 text-center"> {/* Set a fixed width for the icon container and center the text */}
                {React.createElement(item.icon, { className: "xs:text-4xl md:text-5xl p-1" })}
                <span className="text-xs">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl">Others</h2>
          <div className="flex bg-[#e8e8e8a7] rounded-lg m-2 xs:p-1 md:p-5 flex-wrap">
            {otherIcons.map((item, index) => (
              <div key={index} className="flex flex-col justify-center items-center xs:p-3 md:px-5 xs:w-16 md:w-24 text-center"> {/* Set a fixed width for the icon container and center the text */}
                {React.createElement(item.icon, { className: "xs:text-4xl md:text-5xl p-1" })}
                <span className="text-xs">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
