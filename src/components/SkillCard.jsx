import React from "react";
import { Col } from "react-bootstrap";

export default function SkillCard({ Icon, title, description, subtitles }) {
  return (
    <Col lg={4} className="skill-card">
      <Icon />
      <h2>{title}</h2>
      <p className="lg" style={{ textAlign: "center" }}>
        {description}
      </p>
      {subtitles.map((section, index) => (
        <div key={index}>
          <h3>{section.heading}</h3>
          {Array.isArray(section.content) ? (
            <ul>
              {section.content.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="sm" style={{ textAlign: "center" }}>
              {section.content}
            </p>
          )}
        </div>
      ))}
    </Col>
  );
}
