import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <>
      <div
        className="bg-white bg-opacity-75 rounded-lg text-black xs:text-3xl md:text-5xl space-y-2 md:space-y-6 
        md:mb-10 flex flex-col items-end justify-end fixed bottom-0 right-0 p-1 md:p-4"
      >
        <a
          href="https://github.com/AtenaHatta"
          className="rightmenu-icon2 hover:bg-black hover:text-white rounded-md"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/atenahatta/"
          className="rightmenu-icon2 hover:bg-black hover:text-white rounded-md"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="mailto:hattaatena@hotmail.com"
          className="rightmenu-icon2 hover:bg-black hover:text-white rounded-md"
        >
          <HiOutlineMail />
        </a>
      </div>
    </>
  );
}
