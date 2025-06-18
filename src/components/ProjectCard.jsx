import React from "react";
import { Col, Image } from "react-bootstrap";

export default function ProjectCard({
  href,
  imgSrc,
  alt,
  title,
  description,
  colSize = 4,
}) {
  return (
    <Col md={colSize}>
      <a
        className="project-link"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="project-card">
          <Image src={imgSrc} alt={alt} style={{ borderRadius: "15px" }} />
          <h3>{title}</h3>
          <p style={{ textAlign: "center" }}>{description}</p>
        </div>
      </a>
    </Col>
  );
}
