"use client";
import { useDarkMode } from "@/app/(main)/components/DarkModeProvider";
import Link from "next/link";

export default function About({ className = "" }) {
  const { darkMode } = useDarkMode();

  return (
    <section id="about">
      <div className={`about ${className}`}>
        <div className="relative text-black bg-white flex items-center flex-col md:flex-row justify-center py-12 md:py-80 md:h-full">
          <div
            className={`${
              darkMode == "dark" ? "invert" : ""
            }   bg-profile_img w-[170px] h-[220px] md:w-[400px] md:h-[500px] bg-contain relative`}
          >
            <div
              className={` ${
                darkMode == "dark" ? "invert" : ""
              }   bg-about_img  absolute -rotÏte-12 -top-24 -left-14 md:left-80  md:-top-32 w-[200px] h-[250px] md:w-[400px] md:h-[300px] bg-contain bg-no-repeat`}
            />
          </div>

          <div className="flex flex-col items-left justify-center w-[80%] md:w-[45%] md:ml-5">
            <p className="xs:text-xs md:text-base my-2 md:my-5">
              I&apos;m a{" "}
              <span className="text-sm md:text-xl font-yesevaOne">
                Front-End Developer{" "}
              </span>
              with a strong focus on{" "}
              <span className="text-sm md:text-xl font-yesevaOne">React</span>{" "}
              and{" "}
              <span className="text-sm md:text-xl font-yesevaOne">
                TypeScript
              </span>
              .
              <br />I handle everything from app architecture to{" "}
              <span className="text-sm md:text-xl text-mainColor font-yesevaOne">
                design planning{" "}
              </span>
              with Figma,{" "}
              <span className="text-sm md:text-xl text-mainColor font-yesevaOne">
                performance-focused coding
              </span>
              , and deployment. I&apos;m particularly meticulous about the
              overall design and layout, down to the pixel. When it comes to
              coding, I&apos;m always conscious of server costs and strive for
              efficiency in production.
            </p>
            <div className="flex">
              <a
                href="mailto:hattaatena@gmail.com"
                aria-label="email"
                className="bg-black border rounded-sm hover:bg-white hover:text-black hover:border-black 
             text-white xs:py-2 md:py-2 xs:px-2 md:px-4 text-xs md:text-base z-[1000]"
              >
                Contact
              </a>
              <a
                href="/resume/resume_AtenaHatta.pdf"
                target="_blank"
                aria-label="resume"
                rel="noopener noreferrer"
                className="bg-black border rounded-sm hover:bg-white hover:text-black hover:border-black 
                text-white xs:py-2 md:py-2 xs:px-2 md:px-4 ml-5 text-xs md:text-base"
              >
                RESUME
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
