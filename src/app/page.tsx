"use client";
import Hero from "../app/(main)/components/Hero/Hero";
import Contact from "../app/(main)/components/Contact/Contact";
import Navbar from "./(main)/components/Navbar/Navbar";
import About from "../app/(main)/components/About/About";
import Skill from "../app/(main)/components/Skill/Skill";
import WorkWrapper from "../app/(main)/components/Work/WorkWrapper";
import Footer from "../app/(main)/components/Footer/Footer";
import { useDarkMode } from "@/app/(main)/components/DarkModeProvider";
import { useEffect, useState } from "react";

export default function Home() {
  const { darkMode } = useDarkMode();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll(".fadeIn");
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <div
        className={` ${
          darkMode == "dark" ? "invert" : ""
        } text-black bg-white max-w-[2560px] mx-auto relative`}
      >
        <Hero />
        <About className="fadeIn" />
        <Skill className="fadeIn" />
        <WorkWrapper className="fadeIn" />
        <div
          style={{ right: "calc(50% - 720px)" }}
          className="fixed bottom-0 z-50 "
        >
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}
