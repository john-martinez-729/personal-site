import React from "react";
import { Image } from "react-bootstrap";
import { BiCopyright } from "react-icons/bi";
import { RiReactjsFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import logoInverted from "../images/logo-inverted.png";
import resume from "../images/resume.pdf";

export default function Footer({ handleShow }) {
  return (
    <footer className="footer">
      <Image
        alt="Logo, Inverted"
        src={logoInverted}
        style={{ width: "100px", height: "100px", marginBottom: "32px" }}
      />
      <h4 style={{ fontWeight: "300", marginBottom: "16px" }}>
        Software Developer, Designer & Mentor
      </h4>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "16px",
        }}
      >
        <a
          style={{}}
          className="footer-proj-link"
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        <div onClick={handleShow} className="footer-proj-link">
          Contact Me
        </div>
      </div>
      <div
        style={{
          fontWeight: "300",
          fontSize: "14px",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Developed by me{" "}
        <BiCopyright
          style={{ marginRight: "3px", marginLeft: "3px", fontSize: "16px" }}
        />{" "}
        2021
      </div>
      <div
        style={{
          fontWeight: "300",
          fontSize: "12px",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Made with <SiJavascript style={{ fontSize: "24px", margin: "4px" }} />{" "}
        and <RiReactjsFill style={{ fontSize: "24px", margin: "4px" }} />
      </div>
    </footer>
  );
}
