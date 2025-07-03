import React from "react"
import './card.css'

function Card(props){
  return (
    <div className="card" style={props.style}>
         <img src={props.image} alt="lost-img" className="lost-img" />
      <h2>{props.title}</h2>
      <p>{props.subtitle}</p>
    </div>
  );
}

export default Card