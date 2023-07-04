import Navbar from "../../components/Navbar/Navbar";
import ProjectImg from "./ProjectImg"
import ProjectDisplay from "../../components/ProjectCard/ProjectDisplay"
import Footer from "../../components/Footer/Footer"


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