import Hero from "../app/(main)/components/Hero/Hero"
import About from "../app/(main)/components/About";
import Skill from "../app/(main)/components/Skill";
import Work from "../app/(main)/components/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skill />
      <Work />
    </>
  );
}
