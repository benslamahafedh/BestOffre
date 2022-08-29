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
          <Nav className="me-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/">QUI SOMMES NOUS</Nav.Link>
            <Nav.Link href="/">CONDITIONS GENERALES</Nav.Link>
            <Nav.Link href="/">PAIEMENT</Nav.Link>
            <Nav.Link href="/">CONTACTEZ NOUS</Nav.Link>
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
