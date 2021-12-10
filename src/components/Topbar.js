import React from "react";
import { Navbar, Button, Image } from "react-bootstrap";
import logo from "../images/logo-white.png";
import resume from "../images/resume.pdf";

export default function Topbar({ handleShow }) {
  return (
    <Navbar collapseOnSelect expand="sm" variant="dark">
      <Navbar.Brand>
        <Image src={logo} alt="Logo" />
      </Navbar.Brand>

      <div>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <Button>Resume</Button>
        </a>
        <Button onClick={handleShow}>Contact Me</Button>
      </div>
    </Navbar>
  );
}
