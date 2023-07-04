import "./HomeStyles.css"
import IntroImg from "../../assets/intro-bg.jpg"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div> 
      <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>Hi, I'm a developer</p>
            <h1>Marvin Deng</h1>
            <div>
                <Link to="/projects" className="btn">
                    Projects
                </Link>
                <Link to="/tech" className="btn btn-light">
                    Resume
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home