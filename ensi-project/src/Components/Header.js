import React from 'react';
import {Link} from 'react-router-dom';
import { Navbar , Container,Nav,Form,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
    const[search,setSearch]=React.useState("")
    function Clicked(){
        if (search==="")
        alert("rien a rechercher")
        else
        console.log(search)
    }
    function cherche(event){
        console.log(event.target.value)
        setSearch(event.target.value)
    }
    return(
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={require('./logo.png')}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            BestOffre
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
