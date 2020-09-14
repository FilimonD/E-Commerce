import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useStore } from "./storeContext";

const PrimaryNav = () => {
  const { state, dispatch } = useStore();

  function getQuantity() {
    const total = state.reduce((total, item) => {
      return (total += item.quantity);
    }, 0);
    if (total > 0) {
      return `(${total})`;
    }
  }

  return (
    <Navbar sticky="top" className="navbar-items" expand="md">
      <Navbar.Brand style={{ color: "white" }} href="/">
        Bouna-Sal
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="mr-auto"
          style={{ textDecoration: "none", color: "white" }}
        >
          <Link to="/">Home</Link>
          <Link to="/clothings">Clothings</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/accessories">Accessories</Link>
        </Nav>
        <Nav className="mr-2">
          <Link to="/checkout">Checkout {getQuantity()} </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default PrimaryNav;
