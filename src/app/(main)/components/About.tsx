import Image from "next/image";

export default function About({}) {
  return (
    <div className="text-black flex items-center xs:flex-col md:flex-row justify-center h-screen">
        <div>image here</div>
      {/* <Image
        src="img_prof"
        alt="Image 1 description"
        className="img_prof"
        width={400}
        height={300}
      />
      <Image
        src="img_about"
        alt="Image 2 description"
        className="img_about"
        width={400}
        height={300}
      /> */}
      <div className="flex flex-col items-left justify-center xs:w-[80%] md:w-[50%] md:ml-5">
        <h1 className="xs:text-xl md:text-3xl">WEB DEVELOPER</h1>
        <p className="xs:text-sm md:text-xl my-5">
          I’m a Front-End Developer with a strong focus on JavaScript and React.
          I strive to stay up-to-date with the latest advancements in web
          development technologies. Always eager to embrace new opportunities
          for learning and growth.
        </p>
        <div className="flex">
        <button
            className="bg-black border  rounded-lg hover:bg-white hover:text-black hover:border-black 
            text-white xs:py-2 md:py-2 xs:px-2 md:px-4"
            // style={{ filter: isNightMode ? "invert(100%)" : "" }}
          >
            <a href="mailto:hattaatena@hotmail.com">Contact</a>
          </button>
          <button
            className="bg-black border  rounded-lg hover:bg-white hover:text-black hover:border-black 
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
