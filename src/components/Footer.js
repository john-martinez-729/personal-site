import React from "react";
import { Image } from "react-bootstrap";
import { BiCopyright } from "react-icons/bi";
import { RiReactjsFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import logoInverted from "../images/logo-inverted.png";

export default function Footer() {
  return (
    <footer className="footer">
      <Image
        src={logoInverted}
        style={{ width: "100px", height: "100px", marginBottom: "32px" }}
      />
      <h4 style={{ fontWeight: "300", marginBottom: "32px" }}>
        Software Developer, Designer & Mentor
      </h4>
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
