import React from "react";
import "../style-sheets/Testimony.css"

function Testimony(props) {
  return (
    <div className="container-testimony">
      <img className="img-tesyimony"
        src={require(`../Images/testimony-${props.img}.png`)}
        alt="Student IMG" />
      <div className="container-testimony-txt">
        <p className="testimony-name">
          <strong>{props.name}</strong> form {props.country}
        </p>
        <p className="testimony-job">
          {props.job} at <strong>{props.company}</strong>
        </p>
        <p className="testimony-txt">"{props.testimony}"</p>
      </div>
    </div>
  );

}
export default Testimony;