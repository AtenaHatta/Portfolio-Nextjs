import Hero from "../app/(main)/components/Hero/Hero";
import About from "../app/(main)/components/About/About";
import Skill from "../app/(main)/components/Skill/Skill";
import WorkWrapper from "../app/(main)/components/Work/WorkWrapper";
import Footer from "../app/(main)/components/Footer/Footer";

export default function Home() {
  return (
    <>
        <Hero />
        <About />
        <Skill />
        <WorkWrapper />
        <Footer />
    </>
  );
}
