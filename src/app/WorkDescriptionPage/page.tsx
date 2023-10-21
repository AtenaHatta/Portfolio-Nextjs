import React from "react";
import { Project } from "@/app/(main)/components/Work/data";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../(main)/components/Navbar/Navbar";
import Footer from "../(main)/components/Footer/Footer";

export default function Workdescription() {
  return (
    <div className="py-20 bg-white text-black ">
      <NavBar />
      <div className="flex items-center">
        <h1 className="text-6xl md:text-8xl pl-2 text-gray-300">WORK Description</h1>
        <div className="border-b text-gray-300"></div>
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
      <Footer />
    </div>
  );
}
