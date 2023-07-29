import { SiJavascript, SiReact, SiNextdotjs } from "react-icons/si";
import './heroStyle.css'

export default function Hero() {
  return (
    <div className="font-specialElite mt-28 font-yesevaOne xs:ml-1 md:ml-5">
      <h1 className="xs:text-3xl md:text-7xl">I’m ATENA HATTA</h1>
      <h1 className="xs:text-3xl md:text-7xl text-[#3b3a3a]">
        passionate developer
      </h1>
      <h3 className="flex xs:text-3xl md:text-7xl animate-typewriter text-[#6b6a6a]">
        with an enthusiasm
      </h3>
      <div className="xs:text-xs md:text-xl my-4 text-[#383838]">
        <h2>I stay up-to-date with the latest technologies to create</h2>
        <h2>user-centric applications with exceptional performance and usability</h2>
      </div>
      <div className="flex space-x-4">
        <SiJavascript className="xs:w-9 xs:h-9 md:w-14 md:h-14" />
        <SiReact className="xs:w-9 xs:h-9 md:w-14 md:h-14" />
        <SiNextdotjs className="xs:w-9 xs:h-9 md:w-14 md:h-14" />
      </div>
    </div>
  );
}
