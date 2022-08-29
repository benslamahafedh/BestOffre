import logo from './logo.svg';
import List1 from './Components/List1';
import {Routes,Route} from 'react-router-dom';
import Mainpro from './Components/Mainpro';
import data from './Components/data';
import React from 'react';
import Card from './Components/Card/card';
import iphone from './Components/iphone';
import Details from './Components/Details/details';
import Header from './Components/Header/Header';
import CarouselFadeExample from './Components/carousel';
import Footer from './Components/Footer/footer';
import "./App.css"

function App() {
  const Product=data.map((item) =>{
    return(
      <Mainpro
      Name={item.Name}
      img={item.img}
      link={item.link}
      />
    )
  })
  const products=iphone.map((item)=>{
    return(
      <Card  img={item.Image}
      title={item.Name}
      description={item.Specs}
      price={item.Offres[0].Price}
      reference={item.Reference} />
    )
  })
  return (
      <div className="App">
        <Header/>
        <Routes>
          <Route exact path='/' element={<CarouselFadeExample/>}/>
        </Routes>
        <div className='product'>
          <Routes>
            {/* <Route exact path='/' element={Product}/> */}
            <Route exact path='/iphone' element={
              <div className="product-grid">
                  {products}
              </div>}/>
            <Route path='iphone/:productreference' element={<Details />}/>
          </Routes>
        </div>
        <Footer/>
      </div> 
  );
}

export default App;
