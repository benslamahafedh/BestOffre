import React from "react";
import { Link , useParams} from "react-router-dom";
import getProductById from "../../getter";
import iphone from "../iphone";
import "./details.css";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Details(){
    const Reference = useParams();
    const product=getProductById(Reference.productreference,iphone)
    return(
        <div>
            <article className="post">
                    <div className="absolute-bg">
                        <img src={product["Image"]} className="img" />
                    </div>
                <div className="post__container">
                    <span className="post__category">{product.Reference}</span>
                    <div className="post__content">
                        <header>
                            <h1 className="post__header"><span>{product.Name}</span></h1>
                        </header>
                        <p className="last-update">
                            <br/>
                            Dernier mise à jour: {product.Offres[0]["Last-update"]}
                            <br/>
                            </p>
                        <div className="best-offre">
                            <h3 className="price">Meilleur prix: {product.Offres[0].Price}</h3>
                            <img src={product.Offres[0].Store} className="store-logo" />
                            <Link to={product.Offres[0]["product-link"]}>
                                <Button variant="outline-success">Vers boutique</Button>   
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
            <div className="bottom">
                <p className="post__text" >{product.Specs}</p>
            </div>
        </div>
    )
}