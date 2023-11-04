"use client";
import React from "react";
import { projectsData } from "@/app/(main)/components/Work/data";
import Image from "next/image";
import { useDarkMode } from "@/app/(main)/components/DarkModeProvider";
import { MdArrowBackIos } from "react-icons/md";

export default function Page({ params }: { params: { title: string } }) {
  const { darkMode } = useDarkMode();

  let title = decodeURIComponent(params.title);
  console.log(projectsData);
  console.log(title.toLowerCase());

  const project = projectsData.find(
    (project) => project.title.toLowerCase() === title.toLowerCase()
  );

  if (!project) {
    return <div>No project data</div>;
  }

  return (
    <div className="bg-white">
      <MdArrowBackIos className="text-black" />
      <div className="flex items-center">
        <h1 className="text-6xl md:text-8xl pl-2 text-gray-300">
          WORK Description
        </h1>
        <div className="border-b text-gray-300"></div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1>{project.title}</h1>
        <Image
          className={`${
            darkMode === "dark" ? "invert" : ""
          } bg-no-repeat w-[300px] md:w-[400px] md:h-full`}
          src={project.image}
          width={300}
          height={170}
          alt={project.title}
        />
        <p>skill</p>
        <p>github</p>
        <h1>Description</h1>
        <h1>Features</h1>
        <h1>Challenges</h1>
      </div>
    </div>
  );
}
