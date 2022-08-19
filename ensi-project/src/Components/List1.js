import { Link } from "react-router-dom";
import React from "react";
import './List1.css';

export default function List1()
{
 return(
   
    
    <ul >
        <li>
            
            <Link to='/' className="main">Telephone & Internet</Link>
            <ul>
                  <li>
                   
                    <Link to="/" className="main">Telephone & Fax</Link>
                    
                </li>

                <li>
                    
                    <Link to="/" className="main">Accessoires mobiles</Link>
                    
             
                 </li>
                <li>
                    
                    <Link to="/" className="main">Tablettes tactiles</Link> 
                    
                </li> 
                <li>
                    
                    <Link to="/" className="main">SmartWatch</Link>
                    
                  </li>      
            </ul>
        </li>
        
         <li>
            <Link to='/' className="main">Informatique</Link>  
            <ul>
            <li><Link to="/" className="main">Ordinateurs de bureau</Link> </li>
            <li><Link to="/" className="main">Stockage</Link> </li>
            <li><Link to="/" className="main">Serveurs</Link> </li>
            <li><Link to="/" className="main">Logiciel</Link> </li>
            <li><Link to="/" className="main">Ordinateurs portables</Link> </li>
            <li><Link to="/" className="main">Periphériques</Link> </li> 
               
          </ul> 
        </li>
        <li>
        <Link to="/" className="main">Electroménager</Link>
        <ul>
            
            <li><Link to="/" className="main">Cuisson</Link> </li>
            <li><Link to="/" className="main">Menage & Soin maison</Link> </li>
            <li><Link to="/" className="main">Soin & Beauté</Link> </li>
            <li><Link to="/" className="main">Froid</Link> </li>
            <li><Link to="/" className="main">Climatisations</Link> </li>
            <li><Link to="/" className="main">Cafetiere</Link> </li> 
         </ul>
        </li>
        <li>
        <Link to='/' className="main">Impression</Link> 
        <ul>
             <li><Link to="/" className="main">Imprimantes</Link> </li>
            <li><Link to="/" className="main">Photocopieurs</Link> </li>
            <li><Link to="/" className="main">Scanners</Link> </li>
            <li><Link to="/" className="main">Consommables</Link> </li>
        </ul> 
        </li> 
        <li>
        <Link to='/' className="main">Image & Son</Link>  
        <ul>
            <li><Link to="/" className="main">Projection</Link> </li>
            <li><Link to="/" className="main">Televiseurs</Link> </li>
            <li><Link to="/" className="main">Récepteurs & Abonnements</Link> </li>
            <li><Link to="/" className="main">Son Numerique</Link> </li>
            <li><Link to="/" className="main">Photos & Caméscopes </Link> </li>
            <li><Link to="/" className="main">Accessoires Appareil Photo</Link> </li>   
            </ul>
        </li> 
        
        
        
       
    </ul>
   
    
    
  
 )

}
