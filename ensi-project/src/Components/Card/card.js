import React from "react";
import "./card.css";
import {Link, Route, Routes} from 'react-router-dom';

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} className="card__img" />
      <div className="card__body">
        <h3 className="card__title">{props.title}</h3>
        <div className="card__description_div"><p className="card__description">{props.description.slice(0,200)}</p></div>
        <h3 className="card__price">{props.price}</h3>
        <Link to={`./${props.reference}`}>
        <button className="card__btn">See more</button>
        </Link>
      </div>
    </div>
  );
}

