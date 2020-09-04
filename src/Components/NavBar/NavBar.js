import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = (country) => {
    const{alpha3Code}=country
    return (

    <Navbar bg="dark" style={{color:"white"}} expand="lg">
      <Navbar.Brand href="#home" style={{color:"white"}}>Country Details</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home" style={{color:"white"}}><Link to="/home">Home</Link></Nav.Link> 
          <Nav.Link href="#countries" style={{color:"white"}}><Link to={`/countryDetails/${alpha3Code}`}>Countries</Link></Nav.Link>
          <Nav.Link href="#contact" style={{color:"white"}}><Link to="/home">Contact Us</Link></Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    );
};

export default NavBar;