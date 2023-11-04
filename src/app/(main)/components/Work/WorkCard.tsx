"use client";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink, FiFigma } from "react-icons/fi";
import Link from "next/link";
import { Project } from "./data";
import Image from "next/image";
import { useDarkMode } from "@/app/(main)/components/DarkModeProvider";

type WorkProps = {
  project: Project;
};

export default function Work({ project }: WorkProps) {
  const { darkMode } = useDarkMode();

  if (!project) {
    return <div>No project data</div>;
  }

  const icons = [
    { icon: <FiFigma />, text: "Design", link: project.figmaLink },
    { icon: <AiFillGithub />, text: "Github", link: project.githubLink },
    {
      icon: <FiExternalLink />,
      text: "demo",
      link: project.demoLink,
    },
  ];

  const iconElements = icons.map((iconItem) => {
    if (iconItem.link) {
      return (
        <Link
          key={iconItem.text}
          href={iconItem.link}
          className="hover:text-mainColor"
          aria-label={iconItem.text}
        >
          <p className="flex justify-center items-center mr-5">
            <span className="text-2xl text-mainColor">{iconItem.icon}</span>
            <span className="text-md">{iconItem.text}</span>
          </p>
        </Link>
      );
    }
    return null;
  });

  return (
    // <Link href={`/WorkDescription/${project.title}`}>
    <div className="relative flex flex-col items-center p-3 w-[320px] md:w-[400px] h-[100%] md:h-auto md:mb-0">
      <div className="flex justify-end text-2xl  mb-2 md:mb-3 w-full items-center">
        {project.team && (
          <p className="border-2 border-stone-500 rounded-lg text-stone-500 px-2 text-xs">
            {project.team}
          </p>
        )}
      </div>
      <Image
        className={`${
          darkMode == "dark" ? "invert" : ""
        } bg-no-repeat w-[300px] md:w-[400px] md:h-ful`}
        src={project.image}
        width={300}
        height={170}
        alt={project.title}
      />
      <h1 className="text-3xl md:text-4xl font-yesevaOne py-1">
        {project.title}
      </h1>
      <h3 className="text-lg md:text-xl font-yesevaOne">
        {project.description}
      </h3>
      <div className="flex flex-wrap justify-center text-xs md:text-sm space-x-1 m-2 md:m-3 w-60 md:w-72">
        {project.icons.map((icon: string) => (
          <p
            key={icon}
            className="border-2 border-borderMainColor rounded-lg text-mainColor px-2 mb-1"
          >
            {icon}
          </p>
        ))}
      </div>
      <div className="flex">{iconElements}</div>
      <p className="text-xs md:text-sm text-left mt-1">{project.details}</p>
    </div>
    // </Link>
  );
}
