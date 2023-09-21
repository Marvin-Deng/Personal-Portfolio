import "./HomeStyles.css"
import IntroImg from "../../assets/sunset.jpg"
import { Link } from "react-router-dom"
import Typewriter from "typewriter-effect";

const Home = () => {

  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 80,
              strings: [
                "Welcome to my Portfolio!"
              ]
            }}
          />
        </p>
        <h1>Marvin Deng</h1>
        <div>
          <Link to="/projects" className="btn">
            Projects
          </Link>
          <Link to="/about" className="btn btn-light">
            About
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home