import WorkCard from "./WorkCard";
import { projectsData } from "./data";

function WorkWrapper() {
  console.log(projectsData);

  return (
    <section id="work">
      <div className="flex items-center justify-center py-20">
        <div className="grid grid-cols-1 smXl:grid-cols-2 md:grid-cols-3 gap-10 md:gap-24">
          {projectsData.map((project) => {
            return <WorkCard key={project.id} project={project} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default WorkWrapper;
