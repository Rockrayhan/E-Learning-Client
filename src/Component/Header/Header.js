import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <div>

      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-primary fw-bold">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/home">E - Learning</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
          <NavLink className="nav-link active ms-5" aria-current="page" to="/home">Home</NavLink>
          <NavLink className="nav-link active ms-3" aria-current="page" to="/service">Services</NavLink>
          <NavLink className="nav-link active ms-3" aria-current="page" to="/about">About us</NavLink>
          <NavLink className="nav-link active ms-3" aria-current="page" to="/contact">Contact</NavLink>
        
        
      </ul>
     
    </div>
  </div>
</nav> */}

      <Navbar bg="primary" variant='dark' expand="lg">
        <Container>
          <Navbar.Brand to='/home'>E-Learning</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link active ms-3" aria-current="page" to="/home">Home</NavLink>
              <NavLink className="nav-link active ms-3" aria-current="page" to="/service">Services</NavLink>
              <NavLink className="nav-link active ms-3" aria-current="page" to="/about">About us</NavLink>
              <NavLink className="nav-link active ms-3" aria-current="page" to="/contact">Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



    </div>
  );
};

export default Header;