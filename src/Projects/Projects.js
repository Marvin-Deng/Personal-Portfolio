import Navbar from "../Navbar/Navbar";
import ProjectImg from "./ProjectImg"
import Footer from "../Footer/Footer"
import ProjectDisplay from "../ProjectCard/ProjectDisplay"

const Projects = () => {
  return (
    <div>
      <Navbar />
      <ProjectImg/>
      <ProjectDisplay />
      <Footer />
    </div>
  )
}

export default Projects