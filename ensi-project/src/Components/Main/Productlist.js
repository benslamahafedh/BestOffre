import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Productlist(){
    return(
        <Container>
            <Container>
      <Row>
        <Col><img src={require("../Images/21.jpg")} height={500} width={1268}></img></Col>
      </Row>
           </Container>
           <br/>
          <Container>
      <Row>
        <Col><img  src={require("../Images/5.jpg")}height={400} width={634} ></img>
        <img  src={require("../Images/6.jpg")} height={400} width={634} ></img></Col>
      </Row>
      
          </Container>
          <br/>
          <Container>
      <Row>
        <Col><img src={require("../Images/8.jpg")} height={500} width={1268}></img></Col>
      </Row>
          </Container>
          <br/>
         <Container>
    <Row>
        <Col><img src={require("../Images/7.jpg")} height={400} width={634}></img>
        <img src={require("../Images/9.jpg")} height={400} width={634}></img></Col>
      </Row>
         </Container>






        </Container>
    )
}
