import Image from "next/image";

export default function About() {
  return (
    <section id="about"> 
    <div className="relative text-black flex items-center xs:flex-col md:flex-row justify-center h-[100dvh] ">
      <div className="bg-profile_img w-[170px] h-[220px] md:w-[400px] md:h-[500px] bg-contain relative">
        <div className="bg-about_img absolute -rotate-12 -top-36 -left-14 md:left-80  md:-top-32 w-[300px] h-[250px] md:w-[400px] md:h-[300px] bg-contain bg-no-repeat" />
      </div>

      <div className="flex flex-col items-left justify-center xs:w-[80%] md:w-[45%] md:ml-5">
        <p className="xs:text-xs md:text-base my-2 md:my-5">
          I&apos;m a{" "}
          <span className="text-sm md:text-xl font-yesevaOne">
            Front-End Developer{" "}
          </span>
          with a strong focus on{" "}
          <span className="text-sm md:text-xl font-yesevaOne">
            React{" "}
          </span>
          and{" "}
          <span className="text-sm md:text-xl font-yesevaOne">
            TypeScript
          </span>
          . 
          <br />
          I handle everything from app architecture to{" "}
          <span className="text-sm md:text-xl text-mainColor font-yesevaOne">
            design planning{" "}
          </span>
          with Figma, 
          <span className="text-sm md:text-xl text-mainColor font-yesevaOne">
            performance-focused coding
          </span>
          , and deployment. I&apos;m particularly meticulous about the overall
          design and layout, down to the pixel. When it comes to coding,
          I&apos;m always conscious of server costs and strive for efficiency in
          production.
        </p>
        <div className="flex">
          <button
            className="bg-black border rounded-sm hover:bg-white hover:text-black hover:border-black 
            text-white xs:py-2 md:py-2 xs:px-2 md:px-4"
          >
            <a href="mailto:hattaatena@hotmail.com">Contact</a>
          </button>
          <button
            className="bg-black border rounded-sm hover:bg-white hover:text-black hover:border-black 
            text-white xs:py-2 md:py-2 xs:px-2 md:px-4 ml-5"
          >
            <a target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </button>
        </div>
      </div>

    </div>
    </section>
  );
}
