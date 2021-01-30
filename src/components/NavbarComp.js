import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function NavbarComp() {
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Login App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}
