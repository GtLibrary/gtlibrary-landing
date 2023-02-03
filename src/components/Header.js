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
        <Container>
          <Navbar className="nav-header" expand="lg">
              <Navbar.Brand className="header-brand" href="/"><img src="/img/book.png" alt="logo"></img> The Great Library</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                  <Nav.Link href="https://ico.greatlibrary.io/" className="header-link">Culture Coin</Nav.Link>
                  <Nav.Link href="https://books.greatlibrary.io/" className="header-link">Books</Nav.Link>
                  <Nav.Link href="https://author.greatlibrary.io/" className="header-link">Authors</Nav.Link>
                  <Nav.Link href="#" className="header-link">Contact Us</Nav.Link>
              </Nav>
              </Navbar.Collapse>
          </Navbar>
        </Container>
    </div>
  );
};

export default Header;
