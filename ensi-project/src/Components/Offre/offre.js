import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./offre.css"
export default function Offre(props){
    return(
        <div className='offre-component'> 
            <img src={props.logo} className="store-logo" />
            <div className='info'><p className='prix'>{props.prix}</p>
            <p className='maj'>{props.maj}</p>
            </div>
                <Button 
                className="store_button"
                variant="outline-success"
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href=`${props.Link}`;
                    }}>Vers boutique</Button>    
        </div>
    )
}