import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';
import React from 'react';
import Navelement from './Navelement';
import Navmap from './Navmap';

export default function Navmain(){
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    const map = Navelement.map((item) =>{
        return(
        <Navmap
         Name={item.name}
         Sublink={item.Sublink}
        />)})
   
    return(

        <Container>
        <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
        {map}
        </Nav>
        </Container>
    )

        }
