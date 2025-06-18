import React from "react";
import { Row } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/projects";

export default function Projects() {
  return (
    <section className="project-section">
      <div className="container">
        <div className="project-header">
          <h2>Projects</h2>
          <p style={{ textAlign: "center" }}>
            Here are a few projects I've been working on, both professionally
            and for fun.
          </p>
        </div>

        <Row>
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </Row>
      </div>
    </section>
  );
}
