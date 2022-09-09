import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navmap.css';


export default function Navmap(props) {
 
  return (
    <NavDropdown title={props.Name} id="nav-dropdown" menuVariant='dark'>
    {props.Sublink.map((item =>
    <Link to={item.link} className='link-main'>
    <NavDropdown.Item eventKey="4.1" className="link"> {item.name} </NavDropdown.Item>
    <NavDropdown.Divider />
    </Link>  ))}
    
        
      </NavDropdown>
    
  );
}


