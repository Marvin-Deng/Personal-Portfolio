import "./ProjectImgStyles.css"
import ProjectDisplay from "../../components/ProjectCard/ProjectDisplay"
import Footer from "../../components/Footer/Footer";
import siteMetadata from "../../data/siteMetadata";

const Projects = () => {
  return (
    <div>
      <div className="hero-img">
        <div className="heading">
            <h1>
                {siteMetadata.projectsHeader}
            </h1>
            <p>
                {siteMetadata.aboutProjects}
            </p>
        </div>
      </div>
      <ProjectDisplay />
      <Footer />
    </div>
  )
}

export default Projects