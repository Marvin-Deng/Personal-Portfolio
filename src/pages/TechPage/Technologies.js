import "./Technologies.css";
import TechDisplay from "../../components/TechCard/TechDisplay";
import Footer from "../../components/Footer/Footer";
import siteMetadata from "../../data/siteMetadata";

const Technologies = () => {
  return (
    <div>
      <div className="tech-img">
        <div className="heading">
          <h1>
            {siteMetadata.techHeader}
          </h1>
          <p>
            {siteMetadata.aboutTech}
          </p>
        </div>
      </div>
      <TechDisplay />
      <Footer />
    </div>
  )
}

export default Technologies