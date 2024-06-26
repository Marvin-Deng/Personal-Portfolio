import ProjectList from "./ProjectList";
import ProjectCard from "./ProjectCard";
import "./ProjectCard.css";

const ProjectDisplay = () => {
  return (
    <div>
      <div className="project-container">
        {ProjectList.map((val, idx) => {
          return (
            <ProjectCard
              key={idx}
              imgSrc={val.imgSrc}
              title={val.title}
              description={val.description}
              stack={val.stack}
              view={val.view}
              code={val.code}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectDisplay;
