import "./TechCard.css";

import React from "react";

const TechCard = (props) => {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      {props.icon}
      <span className="bar"></span>
      <p>{props.description}</p>
    </div>
  );
};

export default TechCard;
