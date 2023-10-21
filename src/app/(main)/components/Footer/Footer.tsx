import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <div className="fixed bottom-0 -z-10 h-[400px] text-white bg-black w-full flex items-center text-center justify-center">
      <div className="flex-row">
        <h1 className="text-2xl md:text-4xl font-yesevaOne">ATENA HATTA</h1>
        <p className="text-xs md:text-lg">All rights reserved &copy; {date} by Atena Hatta</p>
        <div className="flex items-center text-center justify-center">
          <a
            href="https://github.com/AtenaHatta/Portfolio-Nextjs"
            className="flex items-center justify-center mt-3 py-1 px-5 border border-transparent hover:border-white rounded-md"
          >
            <AiFillGithub className="text-5xl pr-2" />
            <span className="text-xl">Portfolio</span>
          </a>
        </div>
      </div>
    </div>
  );
}
