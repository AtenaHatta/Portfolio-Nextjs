"use client";
import WorkCard from "./WorkCard";
import { projectsData } from "./data";

function WorkWrapper({ className = "" }) {
  return (
    <section id="work" className="bg-white">
      <div className="flex items-center">
        <h1 className="text-6xl md:text-8xl pl-2 text-gray-300">WORK</h1>
        <div className="border-b text-gray-300" style={{ width: "30%" }}></div>
      </div>

      <div className="flex items-center justify-center bg-white pt-2 md:pt-10 pb-24 md:pb-40">
        <div className={`work ${className}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
            {projectsData.map((project) => {
              return <WorkCard key={project.id} project={project} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkWrapper;
