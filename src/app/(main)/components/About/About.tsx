"use client";
import { useDarkMode } from "@/app/(main)/components/DarkModeProvider";

export default function About({ className = "" }) {
  const { darkMode } = useDarkMode();

  return (
    <section id="about">
      <div className="flex items-center">
        <h1 className="text-6xl md:text-8xl pl-2 text-gray-300">ABOUT</h1>
        <div className="border-b text-gray-300" style={{ width: "30%" }}></div>
      </div>
      <div className={`about ${className}`}>
        <div className="relative text-black bg-white flex items-center flex-col md:flex-row justify-center pt-24 md:pt-24 pb-32 md:py-80 md:h-full">
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
            <div className="xs:text-xs md:text-base my-2 md:my-5">
              I&apos;m a{" "}
              <div className="relative text-xs md:text-xl inline-block">
                <span className="absolute inset-x-0 bottom-1 h-2 bg-violet-600 opacity-50" />
                <p className="relative z-10">Front-End Developer</p>
              </div>{" "}
              with a strong focus on{" "}
              <span className="text-sm md:text-xl font-yesevaOne text-mainColor">React</span>{" "}
              and{" "}
              <span className="text-sm md:text-xl font-yesevaOne text-mainColor">TypeScript</span>.
              <br />
              I handle everything from app architecture to{" "}
              <div className="relative text-xs md:text-xl inline-block">
                <span className="absolute inset-x-0 bottom-1 h-2 bg-violet-600 opacity-50" />
                <p className="relative z-10">design planning</p>
              </div>
              {" "}with Figma,{" "}
              <div className="relative text-xs md:text-xl inline-block">
                <span className="absolute inset-x-0 bottom-1 h-2 bg-violet-600 opacity-50" />
                <p className="relative z-10">performance-focused coding</p>
              </div>
              , and deployment. I&apos;m particularly meticulous about the
              overall design and layout, down to the pixel. When it comes to
              coding, I&apos;m always conscious of server costs and strive for
              efficiency in production.
            </div>
            <div className="space-x-5">
              <div className="flex mb-5 space-x-5">
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
                <a
                  href="mailto:hattaatena@gmail.com"
                  aria-label="email"
                  className="bg-black border rounded-sm hover:bg-white hover:text-black hover:border-black 
                text-white xs:py-2 md:py-2 xs:px-2 md:px-4 text-xs md:text-base"
                >
                  CONTACT
                </a>
              </div>
              {/* <a
                className="bg-black border rounded-sm hover:bg-white hover:text-black hover:border-black 
             text-white xs:py-2 md:py-2 xs:px-2 md:px-4 text-xs md:text-lg"
              >
                Read about 100 things that compose me
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
