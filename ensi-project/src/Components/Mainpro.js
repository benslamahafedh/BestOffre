
import "./Mainpro.css"
import { Link } from "react-router-dom";
import React from "react";

export default function Mainpro(props){
    return(
        <div className="Main">
         <Link to={props.link} className="main-link">   
    <img src={props.img} className="im-g"></img >
    <p className="Name">{props.Name}</p>
    </Link>
    </div>
  )
}
