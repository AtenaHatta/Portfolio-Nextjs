"use client";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
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

  return (
    // <Link href="/WorkDescriptionPage">
    <div className="relative flex flex-col items-center p-3 w-[320px] md:w-[400px] h-[100%] md:h-auto md:mb-0">
      <div className="flex justify-end text-2xl  mb-2 md:mb-3 w-full items-center">
        {project.team && (
          <p className="border-2 border-stone-500 rounded-lg text-stone-500 px-2 text-xs">
            {project.team}
          </p>
        )}
        <Link
          href={project.githubLink}
          className="hover:text-mainColor"
          aria-label="github"
        >
          <AiFillGithub />
        </Link>
        <Link
          href={project.demoLink}
          className="hover:text-mainColor"
          aria-label="demo"
        >
          <FiExternalLink />
        </Link>
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

      <div className="flex flex-wrap justify-center text-xs md:text-sm space-x-1 m-2 md:m-3">
        {project.icons.map((icon: string) => (
          <p
            key={icon}
            className="border-2 border-borderMainColor rounded-lg text-mainColor px-2"
          >
            {icon}
          </p>
        ))}
      </div>

      <p className="text-xs md:text-sm text-left">{project.details}</p>
    </div>
    // </Link>
  );
}
