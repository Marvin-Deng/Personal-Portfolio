import "./ProjectCard.css";
import ProjectList from "./ProjectList";
import ProjectCard from "./ProjectCard";

const ProjectDisplay = () => {
  return (
    <div className="project-card">
      <div className="project-container">
        {ProjectList.map((val, idx) => {
            return (
                <ProjectCard 
                    key={idx}
                    imgSrc={val.imgSrc}
                    title={val.title}
                    description={val.description}
                    view={val.view}
                    code={val.code}
                />
            )
        })}
      </div>
    </div>
  )
}

export default ProjectDisplay