import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { BiCodeAlt, BiBookHeart } from "react-icons/bi";
import { RiPencilRuler2Line } from "react-icons/ri";

export default function Skills() {
  return (
    <div className="skills-div">
      <Container className="box-shadow">
        <Row className="skills-row">
          <Col lg={4} className="skill-card">
            <BiCodeAlt className="skill-icon" />
            <h2 className="skill-card-title">Software Developer</h2>
            <p className="skill-content lg">
              I love to code and enjoy bringing ideas to life on a browser or
              mobile device.
            </p>
            <h3 className="skill-title">Languages I speak:</h3>
            <p className="skill-content sm">JS, HTML, CSS, Sass, Ruby, SQL</p>
            <h3 className="skill-title">Dev Skills:</h3>
            <ul className="skill-list">
              <li>React</li>
              <li>Redux</li>
              <li>React Native</li>
              <li>Git</li>
              <li>TestFlight</li>
              <li>Mobile Deployment</li>
            </ul>
          </Col>
          <Col lg={4} className="skill-card">
            <RiPencilRuler2Line className="skill-icon" />
            <h2 className="skill-card-title">Designer</h2>
            <p className="skill-content lg">
              I value clean and simple design patterns and thoughtful UI/UX
              decisions.
            </p>
            <h3 className="skill-title">Things I enjoy designing:</h3>
            <p className="skill-content sm">Web, Mobile, Apps, UI, UX</p>
            <h3 className="skill-title">Design Skills:</h3>
            <ul className="skill-list">
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>Adobe XD</li>
              <li>Wireframes</li>
              <li>Logo Design</li>
              <li>Pen & Paper</li>
            </ul>
          </Col>
          <Col lg={4} className="skill-card">
            <BiBookHeart className="skill-icon" />
            <h2 className="skill-card-title">Mentor</h2>
            <p className="skill-content lg">
              I am empathy-driven and want to ensure everyone is coding to the
              best of their ability.
            </p>
            <h3 className="skill-title">Experiences I draw from:</h3>
            <p className="skill-content sm">
              Thousands of hours of dev experience, creating all types of
              projects
            </p>
            <h3 className="skill-title">Mentorship Offerings:</h3>
            <ul className="skill-list">
              <li>Code Reviews</li>
              <li>Project Consultations</li>
              <li>One-on-one Instruction</li>
              <li>Rubber Ducking</li>
              <li>Product Testing</li>
              <li>Testing & Feedback</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
