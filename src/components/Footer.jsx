import React from "react";
import { Image } from "react-bootstrap";
import { BiCopyright } from "react-icons/bi";
import { RiReactjsFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import logoInverted from "../images/logo-inverted.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Footer({ handleShow }) {
  return (
    <footer>
      <Image alt="Logo, Inverted" src={logoInverted} />
      <h4>Software Developer, Designer & Mentor</h4>
      <div className="footer-links">
        <Link className="footer-link" to="/resume">
          Resume
        </Link>
        <div onClick={handleShow} className="footer-link">
          Contact Me
        </div>
      </div>
      <p>
        Developed by me <BiCopyright /> 2021
      </p>
      <p>
        Made with <SiJavascript /> and <RiReactjsFill />
      </p>
    </footer>
  );
}
