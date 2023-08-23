"use client";
import WorkCard from "./WorkCard";
import { projectsData } from "./data";

function WorkWrapper({ className = "" }) {
  return (
    <section id="work">
      <div
        className={` flex items-center justify-center bg-white py-20 pb-40`}
      >
        <div className={`work ${className}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-24">
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
