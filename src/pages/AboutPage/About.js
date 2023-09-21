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
            Hi! I'm Marvin, a self-driven student studying Computer Science at UCLA with a passion for building projects that create meaningful impacts. I've had the privilege of closely engaging with accomplished engineers and researchers, which has fueled my curiosity and drive to innovate. Additionally, my internships and projects have provided me with invaluable experience, allowing me to refine my skills with the best practices. I'm excited to continue exploring the ever-evolving world of technology and contributing to its advancement.
          </p>
        </div>
      </div>
      <Timeline />
      <Footer />
    </div>
  )
}

export default About