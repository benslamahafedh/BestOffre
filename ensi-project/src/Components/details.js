import React from "react";
import { Link , useParams} from "react-router-dom";
import getProductById from "../getter";
import iphone from "./iphone";
export default function Details(){
    const Reference = useParams();
    const product=getProductById(Reference.productreference,iphone)
    return(
        <div>
            {/* <img src={product["Image"]} className="img" /> */}
            <h1 className="title">{product.Name}</h1>
            <h3 className="reference">{product.Reference}</h3>
            <p className="specs">{product.Specs}</p>
            <p className="last-update">{product.Offres[0]["Last-update"]}</p>
            <div className="best-offre">
                <h3 className="price">{product.Offres[0].Price}</h3>
                <img src={product.Offres[0].Store} className="store-logo" />
                <Link to={product.Offres[0]["product-link"]}>
                    <button className="card__btn">See more</button>
                </Link>
            </div>
        </div>
    )
}