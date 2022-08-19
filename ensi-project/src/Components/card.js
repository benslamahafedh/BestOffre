import React from "react";
import "./card.css";
import {Link, Route, Routes} from 'react-router-dom';
import Details from "./details";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} className="card__img" />
      <div className="card__body">
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description.slice(0,200)}</p>
        <h3 className="card__price">{props.price}</h3>
        <Link to={`./${props.reference}`}>
        <button className="card__btn">See more</button>
        </Link>
      </div>
    </div>
  );
}

