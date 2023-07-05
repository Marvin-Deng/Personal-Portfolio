import "./Technologies.css";
import TechCard from "../../components/TechCard/TechCard";

const Technologies = () => {
  return (
    <div>
      <div className="tech-img">
        <div className="heading">
          <h1>
            TOOLS AND FRAMEWORKS
          </h1>
          <p>
            Throughout my classes and personal projects, I've used a variety of different tools and
            frameworks.
          </p>
        </div>
      </div>
      <TechCard />
    </div>
  )
}

export default Technologies