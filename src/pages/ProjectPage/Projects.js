import "./ProjectImgStyles.css"
import ProjectDisplay from "../../components/ProjectCard/ProjectDisplay"
import Footer from "../../components/Footer/Footer";

const Projects = () => {
  return (
    <div>
      <div className="hero-img">
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
      <Footer />
    </div>
  )
}

export default Projects