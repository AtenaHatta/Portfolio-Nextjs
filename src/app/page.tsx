'use client';
import Hero from "../app/(main)/components/Hero/Hero";
import About from "../app/(main)/components/About/About";
import Skill from "../app/(main)/components/Skill/Skill";
import WorkWrapper from "../app/(main)/components/Work/WorkWrapper";
import Footer from "../app/(main)/components/Footer/Footer";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1, // 10% が表示されたらトリガー
      }
    );
  
    const elements = document.querySelectorAll('.fadeIn');
    elements.forEach((element) => {
      observer.observe(element);
    });
  
    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  
  return (
    <>
        <Hero />
        <About className="fadeIn" />
        <Skill className="fadeIn" />
        <WorkWrapper className="fadeIn" />
        <Footer />
    </>
  );
}
