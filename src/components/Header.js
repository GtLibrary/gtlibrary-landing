import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/Header.css"
// import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <div className="header">
        <div className="header-effect">
            <img src="/img/navbar.png" alt="header navbar"></img>
        </div>
        <Navbar className="nav-header" expand="lg">
        <Container>
            <Navbar.Brand className="header-brand" href="#home">The Great Library</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  );
};

export default Header;
