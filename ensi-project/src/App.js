import logo from './logo.svg';
import List1 from './Components/List1';
import {Routes,Route} from 'react-router-dom';
import Mainpro from './Components/Mainpro';
import data from './Components/data';
import React from 'react';
import Card from './Components/card';
import iphone from './Components/iphone';
import Details from './Components/details';
import Header from './Components/Header';
import CarouselFadeExample from './Components/carousel';
import Footer from './Components/footer';

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
        <CarouselFadeExample/>
       <List1/>
        <div className='product'>
          <Routes>
            <Route exact path='/' element={Product}/>
            <Route exact path='/iphone' element={products}/>
            <Route path='iphone/:productreference' element={<Details />}/>
          </Routes>
        </div>
        <Footer/>
      </div> 
  );
}

export default App;
