import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import {FaGithub} from "react-icons/fa";
import {SiFacebook} from "react-icons/si";
import {FiTwitter} from "react-icons/fi";
import {ImGoogle3} from "react-icons/im";
import {BsInstagram,BsLinkedin} from "react-icons/bs";
import "./footer.css";
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
          <span className='icon'><SiFacebook size={35}/></span>
          <span className='icon'><FiTwitter size={35}/></span>
          <span className='icon'><BsInstagram size={35}/></span>
          <span className='icon'><ImGoogle3 size={35}/></span>
          <span className='icon'><FaGithub size={35}/></span>
          <span className='icon'><BsLinkedin size={35}/></span>
          
          
        <section className='mb-4'>
          <p>
          BestOffre est un comparateur de prix avec des centaines de web marchands dans plusieurs catégories avec des milliers d'articles référencés par nos soins. Pour acheter moins cher et acheter pas cher, comparer les prix en utilisant ce comparateur pour trouver le meilleur rapport qualité prix chez nos web marchands et site e-commerce en ligne. Pour l'équipement de la maison, congélateur, appareil photo, téléviseur écran-plat, chaine HIFI, le téléphone mobile ou smartphone, ordinateur portable ou DEAL, vous pourrez comparer tous les prix et acheter moins cher.
          </p>
        </section>

        <section className='aa'>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Products</h5>
                    <Link to="" style={{textDecoration: 'none'}}><p>Téléphonie & Internet</p></Link> 
                    <Link to="" style={{textDecoration: 'none'}} ><p>Tablettes Tactiles</p></Link> 
                    <Link to="" style={{textDecoration: 'none'}} ><p>Ordinateur Portable</p></Link> 
                    <Link to="" style={{textDecoration: 'none'}} ><p>Ordinateur De Bureau</p></Link> 
                    <Link to="" style={{textDecoration: 'none'}} ><p>Congélateurs</p></Link> 
                    <Link to="" style={{textDecoration: 'none'}} ><p>Climatisations</p></Link> 
            </MDBCol>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Liens Pratiques</h5>
                    <Link to="/" style={{textDecoration: 'none'}}><p>Qui Sommes-Nous</p></Link> 
                    <Link to="/" style={{textDecoration: 'none'}}><p>Pourquoi BestOffre.com</p></Link> 
                    <Link to="/" style={{textDecoration: 'none'}}><p>Plan Du Site</p></Link> 
                    <Link to="/" style={{textDecoration: 'none'}}><p>Par Fabricants</p></Link> 

            </MDBCol>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Informations</h5>
                    <Link to="/" style={{textDecoration: 'none'}}><p>Conditions Générales D'utilisation</p></Link> 
                    <Link to="/" style={{textDecoration: 'none'}}><p>FAQs</p></Link> 
                    <Link to="/" style={{textDecoration: 'none'}}><p>Contacts</p></Link> 
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright :&nbsp;   
        <a className='text-white' href='/'>
          BestOffre.com
        </a>
      </div>
    </MDBFooter>
  );
}