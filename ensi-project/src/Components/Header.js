import React from 'react';
import logo from './logo.png';
import './Header.css';
import {Link} from 'react-router-dom';


function Header(){
    const[search,setSearch]=React.useState("")
    function Clicked(){
        if (search=="")
        alert("rien a rechercher")
        else
        console.log(search)
    }
    function cherche(event){
        console.log(event.target.value)
        setSearch(event.target.value)
    }
    return(
        <div className='head'>
            <Link to='/'>
            <img src={logo} className="head--img"></img>
            </Link>
        <form className='search--form'>
            <input type="text" name='search' className='search--text' placeholder='Rechercher un produit...' autoFocus onChange={cherche}></input>
            <div className='search--bar'>
            <button className='search--btn' onClick={Clicked} >
            

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
            </button>
            </div>

            
        </form>
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        
        </div>
    )
}
export default Header;
