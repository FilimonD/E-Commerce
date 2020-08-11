import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const PrimaryNav = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand href="#home">Bouna-Sal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/clothing">Clothing</Nav.Link>
            <Nav.Link href="/trainers">Trainers</Nav.Link>
            <Nav.Link href="/accessories ">Accesories</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/signin">Sign-In</Nav.Link>
            <Nav.Link href="/createaccount">Create Account</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PrimaryNav;
