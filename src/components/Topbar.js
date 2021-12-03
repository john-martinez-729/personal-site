import React from "react";
import { Navbar, Button, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/logo-white.png";
import resume from "../images/resume.pdf";

export default function Topbar({ handleShow }) {
  return (
    <Navbar collapseOnSelect expand="sm" className="topbar" variant="dark">
      <Link to="/">
        <Navbar.Brand>
          <Image src={logo} className="topbar-logo" />
        </Navbar.Brand>
      </Link>

      <Navbar.Toggle
        className="custom-toggler"
        aria-controls="responsive-navbar-nav"
        variant="dark"
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <div className="navbar-div">
          <a
            style={{}}
            className="project-link"
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="outline-btn" style={{ marginRight: "8px" }}>
              Resume
            </Button>
          </a>
          <Button onClick={handleShow} className="outline-btn">
            Contact Me
          </Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
