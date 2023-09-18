import React from "react";
import { Project } from "@/app/(main)/components/Work/data";
import Image from "next/image";
import Link from "next/link";

export default function Workdescription() {
  return (
    <div className="my-10">
      <div className="flex items-center">
        <h1 className="text-6xl md:text-8xl pl-2 text-gray-300">WORK Description</h1>
        <div className="border-b text-gray-300" style={{ width: "30%" }}></div>
      </div>

      <div>
        <h1>Work Title</h1>
        <p>img</p>
        <p>skill</p>
        <p>github</p>
        <h1>Description</h1>
        <h1>Features</h1>
        <h1>Challenges</h1>
      </div>
    </div>
  );
}
