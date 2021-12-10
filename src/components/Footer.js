import React from "react";
import { Image } from "react-bootstrap";
import { BiCopyright } from "react-icons/bi";
import { RiReactjsFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import logoInverted from "../images/logo-inverted.png";
import resume from "../images/resume.pdf";

export default function Footer({ handleShow }) {
  return (
    <footer>
      <Image alt="Logo, Inverted" src={logoInverted} />
      <h4>Software Developer, Designer & Mentor</h4>
      <div className="footer-links">
        <a
          className="footer-link"
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
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
