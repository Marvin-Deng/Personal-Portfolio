import Timeline from "../../components/Timeline/Timeline"
import Footer from "../../components/Footer/Footer";
import "./About.css"

const About = () => {
  return (
    <div>
      <div className="about-img">
        <div className="heading">
          <h1>
            ABOUT ME
          </h1>
          <p>
            Hi! I'm Marvin, a self-driven sophomore pursuing a Computer Science Major at UCLA, with a deep passion for full-stack development and machine learning. As I've progressed through my academic journey and participated in various extracurricular activities, I've had the privilege of closely engaging with accomplished engineers and researchers. Additionally, my internships and projects have provided me with invaluable experience, enriching my understanding of cutting-edge industry trends and allowing me to refine my skills with the best practices.          
          </p>
        </div>
      </div>
      <Timeline />
      <Footer />
    </div>
  )
}

export default About