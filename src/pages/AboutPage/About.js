import Timeline from "../../components/Timeline/Timeline";
import Footer from "../../components/Footer/Footer";
import siteMetadata from "../../data/siteMetadata";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="about-img">
        <div className="heading">
          <h1>{siteMetadata.aboutHeader}</h1>
          <p>{siteMetadata.aboutMe}</p>
        </div>
      </div>
      <Timeline />
      <Footer />
    </div>
  );
};

export default About;
