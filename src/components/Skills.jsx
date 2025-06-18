import React from "react";
import { Row } from "react-bootstrap";
import SkillCard from "./SkillCard";
import { skillsData } from "../data/skills";

export default function Skills() {
  return (
    <section className="skills-section">
      <div className="box-shadow container">
        <Row>
          {skillsData.map((skill, idx) => (
            <SkillCard key={idx} {...skill} />
          ))}
        </Row>
      </div>
    </section>
  );
}
