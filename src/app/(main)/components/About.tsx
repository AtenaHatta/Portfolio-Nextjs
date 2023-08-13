import Image from "next/image";

export default function About({}) {
  return (
    <div className="relative text-black flex items-center xs:flex-col md:flex-row justify-center h-screen">
      <Image
        src="https://ik.imagekit.io/atcan/profilephoto.jpg?updatedAt=1689406165811"
        alt="Image 1 description"
        className="w-[170px] h-[220px] md:w-[400px] md:h-[500px] object-contain"
        width={400}
        height={300}
      />
      <Image
        src="https://ik.imagekit.io/atcan/about.png?updatedAt=1689406114260"
        alt="Image 2 description"
        className="absolute -rotate-12 top-5 left-0 md:top-0 w-[200px] h-[150px] md:w-[400px] md:h-[300px]"
        width={400}
        height={450}
      />

      <div className="flex flex-col items-left justify-center xs:w-[80%] md:w-[50%] md:ml-5">
        <p className="xs:text-xs md:text-base my-2 md:my-5">
          I’m a{" "}
          <span className="text-sm md:text-xl from-stone-400 font-specialElite">
            Front-End Developer{" "}
          </span>
          with a strong focus on{" "}
          <span className="text-sm md:text-xl from-stone-400 font-specialElite">
            React
          </span>{" "}
          and{" "}
          <span className="text-sm md:text-xl from-stone-400 font-specialElite">
            TypeScript
          </span>
          .
          <br />I handle everything from app architecture to design planning
          with Figma, <br />
          <span className="text-sm md:text-xl from-stone-400 font-specialElite">
            performance-focused coding
          </span>
          , and deployment. I’m particularly meticulous about the overall design
          and layout, down to the pixel. When it comes to coding, I’m always
          conscious of server costs and strive for efficiency in production.
        </p>
        <div className="flex">
          <button
            className="bg-black border rounded-sm hover:bg-white hover:text-black hover:border-black 
            text-white xs:py-2 md:py-2 xs:px-2 md:px-4"
            // style={{ filter: isNightMode ? "invert(100%)" : "" }}
          >
            <a href="mailto:hattaatena@hotmail.com">Contact</a>
          </button>
          <button
            className="bg-black border rounded-sm hover:bg-white hover:text-black hover:border-black 
            text-white xs:py-2 md:py-2 xs:px-2 md:px-4 ml-5"
            // style={{ filter: isNightMode ? "invert(100%)" : "" }}
          >
            <a target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
