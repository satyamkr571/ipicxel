import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import camera from "./image/camera.png";
import "./navbar.css";

export default function Navbars() {
  return (
    <Navbar expand="xl" variant="dark" sticky="top" className="navcolor">
      <Navbar.Brand href="/" className="navheadfont">
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
          <Nav.Link href="/photographer" className="active nav_ab">
            PhotoGrapher
          </Nav.Link>
          <Nav.Link href="/list" className="active nav_ab">
            Posts
          </Nav.Link>
          <Nav.Link href="/login" className="active nav_ab">
            Login
          </Nav.Link>
          <Nav.Link href="/register" className="active nav_ab">
            SignUp
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
