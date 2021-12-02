import React from "react";
import { Navbar, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/logo-white.png";
import resume from "../images/resume.pdf";

export default function Topbar() {
  function mentorship() {
    return (
      <Link
        to="/mentorship"
        className="hoverable-text"
        style={{
          fontWeight: "300",
          marginRight: "32px",
          alignItems: "center",
          display: "flex",
          textDecoration: "none",
        }}
      >
        <Navbar.Text style={{ margin: "0", padding: "0" }}>
          Mentorship
        </Navbar.Text>
      </Link>
    );
  }
  return (
    <Navbar className="topbar">
      <Link to="/">
        <Navbar.Brand>
          <img src={logo} className="topbar-logo" />
        </Navbar.Brand>
      </Link>

      <a className="project-link" href={resume} target="_blank">
        <Button className="outline-btn">Resume</Button>
      </a>
    </Navbar>
  );
}
