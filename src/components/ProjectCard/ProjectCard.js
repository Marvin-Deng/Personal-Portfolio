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
            <p className="description"> 
              {props.description} 
            </p>
            <span className="bar"></span>
            <h3>Stack</h3>
            <div className="stack-items-container">
              {props.stack.map((item, index) => (
                  <p key={index} className="stack-item">{item}</p>
              ))}
            </div>
            <div className="project-btns">
              <NavLink to={props.view} className="btn"> View </NavLink>
              <NavLink to={props.code} className="btn"> Code </NavLink>
          </div>
      </div>
    </div>
  )
}

export default ProjectCards