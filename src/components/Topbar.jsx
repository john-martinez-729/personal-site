import React from "react";
import { Navbar, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../images/logo-white.png";

export default function Topbar({ handleShow }) {
  return (
    <Navbar collapseOnSelect expand="sm" variant="dark" className="px-3">
      <Navbar.Brand>
        <Link to="/">
          <Image src={logo} alt="Logo" />
        </Link>
      </Navbar.Brand>

      <div className="d-flex gap-2 ms-auto">
        <Link to="/resume">
          <Button>Resume</Button>
        </Link>
        <Button onClick={handleShow}>Contact Me</Button>
      </div>
    </Navbar>
  );
}
