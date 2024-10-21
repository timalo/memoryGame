import { useEffect, useState } from "react";

export default function Card(props) {
  return (
    <div className="cardDiv">
      <div className="cardImageDiv">
        <img className="cardImage" src={props.imageUrl}></img>
      </div>
      <div className="cardTitleDiv">
        <div className="cardTitle">{props.title}</div>
      </div>
    </div>
  );
}
