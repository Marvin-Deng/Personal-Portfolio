import "./Technologies.css";
import TechDisplay from "../../components/TechCard/TechDisplay";
import Footer from "../../components/Footer/Footer";

const Technologies = () => {
  return (
    <div>
      <div className="tech-img">
        <div className="heading">
          <h1>
            TOOLS AND FRAMEWORKS
          </h1>
          <p>
            Throughout my classes, personal projects, and internships, I've used a variety of different tools and
            frameworks.
          </p>
        </div>
      </div>
      <TechDisplay />
      <Footer />
    </div>
  )
}

export default Technologies