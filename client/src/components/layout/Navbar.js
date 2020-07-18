import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import camera from "../../image/camera.png";

export default function Navbars() {
  return (
    <Navbar bg="transparent" expand="xl" variant="light" sticky="top">
      <Navbar.Brand href="#home">
        <img
          src={camera}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="ipicXel logo"
        />
        iPicXel
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="nav_a ">
          <Nav.Link href="/home" className="active">
            PhotoGrapher
          </Nav.Link>
          <Nav.Link href="/list" className="active">
            Posts
          </Nav.Link>
          <Nav.Link href="/create" className="active">
            Login
          </Nav.Link>
          <Nav.Link href="/" className="active">
            SignUp
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
