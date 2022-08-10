import logo from './logo.svg';
import Header from './Components/Header';
import List1 from './Components/List1';
import {Routes,Route} from 'react-router-dom';
import Mainpro from './Components/Mainpro';
import data from './Components/data';

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
  return (
    <div className="App">
    <Header/>
    <List1/>
    <div className='product'>
    {Product}
    </div>
    </div>
  );
}

export default App;
