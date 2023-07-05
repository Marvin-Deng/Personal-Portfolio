import "./ProjectCard.css";
import { NavLink } from "react-router-dom";

const ProjectCards = (props) => {
  return (
    <div className = "project-card">
      <div className="project-img">
        <img src={props.imgSrc} alt="img" />
      </div>
      <h2 className="project-title"> {props.title} </h2>
          <span className="bar"></span>
          <div className="project-details">
            <p> {props.description} </p>
            <span className="bar"></span>
            <div className="project-btns">
              <NavLink to={props.view} className="btn"> View </NavLink>
              <NavLink to={props.code} className="btn"> Code </NavLink>
          </div>
      </div>
    </div>
  )
}

export default ProjectCards