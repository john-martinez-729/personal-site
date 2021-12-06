import React from "react";
import { Navbar, Button, Image } from "react-bootstrap";
import logo from "../images/logo-white.png";
import resume from "../images/resume.pdf";

export default function Topbar({ handleShow }) {
  // function hamburger() {
  //   <>
  //     <Navbar.Toggle
  //       className="custom-toggler"
  //       aria-controls="responsive-navbar-nav"
  //       variant="dark"
  //     />
  //     <Navbar.Collapse id="responsive-navbar-nav">
  //       <div className="navbar-div">
  //         <a
  //           style={{}}
  //           className="project-link"
  //           href={resume}
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           <Button className="outline-btn" style={{ marginRight: "8px" }}>
  //             Resume
  //           </Button>
  //         </a>
  //         <Button onClick={handleShow} className="outline-btn">
  //           Contact Me
  //         </Button>
  //       </div>
  //     </Navbar.Collapse>
  //   </>;
  // }

  return (
    <Navbar collapseOnSelect expand="sm" className="topbar" variant="dark">
      <Navbar.Brand style={{ padding: 0, margin: 0 }}>
        <Image src={logo} className="topbar-logo" alt="Logo" />
      </Navbar.Brand>

      <div>
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
    </Navbar>
  );
}
