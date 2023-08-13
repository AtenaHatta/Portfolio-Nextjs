import { SiReact, SiTypescript } from "react-icons/si";
import "./heroStyle.css";


export default function Hero() {
  return (
    <div className="mt-24 md:mt-56 mb-56">
      <div className="font-yesevaOne ml-1 md:ml-10">
        <h1 className="text-8xl md:text-7xl">
          I’m{" "}
          <span className="block md:inline text-5xl md:text-7xl">
            ATENA HATTA,
          </span>
        </h1>
        <h1 className="text-6xl md:text-7xl text-[#3b3a3a]">
          passionate{" "}
          <span className="block md:inline text-5xl md:text-7xl">
            developer
          </span>
        </h1>
        <h3 className="flex text-3xl md:text-7xl animate-typewriter text-[#6b6a6a]">
          with an enthusiasm
        </h3>
        <div className="text-base md:text-xl my-1 md:my-4 text-[#383838]">
          <h2>
            I stay up-to-date with{" "}
            <span className="block md:inline">
              the latest technologies to create
            </span>
          </h2>
          <h2>
            user-centric applications with
            <span className="block md:inline">
              {" "}
              exceptional performance and usability
            </span>
          </h2>
        </div>
        <div className="flex mt-4 space-x-4">
          <SiReact className="w-12 h-12 md:w-14 md:h-14" />
          <SiTypescript className="w-12 h-12 md:w-14 md:h-14" />
        </div>
      </div>

    </div>
  );
}
