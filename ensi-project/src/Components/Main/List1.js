import React from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './owl.css';
import { Container } from 'react-bootstrap';
import Card from '../Card/card';
import Data from "./Data";


export default function List1(){
    return(
        <Container>
            <div className='list--slider'>
        <div>  
        <div class='container-fluid' >      
         <div className="row title" style={{marginBottom: "20px"}} >      
         </div>  
     </div>  
     <div class='container-fluid' >  
     <Container>          
      <OwlCarousel items={4}  
        className="owl-theme"  
        loop  
        nav  
        margin={4} >  
        {Data.map((item =>(
            <Card 
            img={item.Image}
            title={item.Name}
            price={item.Offres[0].Price}
            description={item.Specs}
            reference={item.Reference}/>

        )))}
        
    </OwlCarousel>  
     </Container>
    
    </div>  

    </div> 
    </div>
    </Container> 
    )
}
