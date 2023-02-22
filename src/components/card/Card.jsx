import React from "react";
import"./Card.css"
function Card({ title, type }) {
  return (
    <section>
      <p>{title}</p>

      {type.map((item,index)=>(
        <span key={index}>{item}</span>
      ))}
    </section>
  );
}

export default Card;
