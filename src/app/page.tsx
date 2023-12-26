"use client";
import Hero from "../app/(main)/components/Hero/Hero";
import Contact from "../app/(main)/components/Contact/Contact";
import Navbar from "./(main)/components/Navbar/Navbar";
import About from "../app/(main)/components/About/About";
import Skill from "../app/(main)/components/Skill/Skill";
import WorkWrapper from "../app/(main)/components/Work/WorkWrapper";
// import Onehundred from "../app/(main)/components/Onehundred/Onehundred";
import Footer from "../app/(main)/components/Footer/Footer";
import { useDarkMode } from "@/app/(main)/components/DarkModeProvider";
import { useEffect } from "react";
import Experience from "./(main)/components/Experience/Experience";

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
        className={`  fixed top-0 left-0 h-screen w-full bg-cover -z-10 ${
          darkMode == "dark" ? " bg-bghero_dark" : "bg-bghero_light"
        } `}
      />
      <Contact />

      <div
        className={` ${
          darkMode == "dark" ? "invert" : ""
        } text-black  max-w-[2560px] mx-auto relative `}
      >
        <Hero />
        <About className="fadeIn" />
        <Experience className="fadeIn" />
        <Skill className="fadeIn" />
        <WorkWrapper className="fadeIn" />
        {/* <Onehundred className="fadeIn" /> */}
        <div
          style={{ right: "calc(50% - 720px)" }}
          className="fixed bottom-0 z-50 "
        ></div>
        <Footer />
      </div>
    </>
  );
}
