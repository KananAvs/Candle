import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import favicon from '../../assets/favicon-32x32.png';

const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-pastel-pink" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          <img 
            src={favicon} 
            alt="Candle Logo" 
            width="32" 
            height="32" 
            className="me-2"
          />
          Candle
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navigation" />
        <Navbar.Collapse id="main-navigation">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/store" className="nav-link">Store</Nav.Link>
            <Nav.Link as={Link} to="/cart" className="nav-link">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
