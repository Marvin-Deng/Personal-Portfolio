import "./ProjectImgStyles.css"
import ProjectDisplay from "../../components/ProjectCard/ProjectDisplay"


const Projects = () => {
  return (
    <div>
      <div id="projectPage" className="hero-img">
        <div className="heading">
            <h1>
                PROJECTS
            </h1>
            <p>
                Some of my most recent works
            </p>
        </div>
      </div>
      <ProjectDisplay />
    </div>
  )
}

export default Projects