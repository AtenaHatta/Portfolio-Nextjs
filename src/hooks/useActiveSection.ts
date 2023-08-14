import { useState, useEffect } from "react";

const useActiveSection = (threshold: number): string | null => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: threshold,
      }
    );

    const sections = document.querySelectorAll<HTMLElement>("section");

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [threshold]);

  return activeSection;
};

export default useActiveSection;
