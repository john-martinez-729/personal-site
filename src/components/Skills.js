import React from "react";
import { Row, Col } from "react-bootstrap";
import { BiCodeAlt, BiBookHeart } from "react-icons/bi";
import { RiPencilRuler2Line } from "react-icons/ri";

export default function Skills() {
  return (
    <section className="skills-section">
      <div className="box-shadow container">
        <Row>
          <Col lg={4} className="skill-card">
            <BiCodeAlt />
            <h2>Software Developer</h2>
            <p className="lg">
              I love to code and enjoy bringing ideas to life on a browser or
              mobile device.
            </p>
            <h3>Languages I speak:</h3>
            <p className="sm">JS, TS, HTML, CSS, Sass, SQL</p>
            <h3>Dev Skills:</h3>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>React Native</li>
              <li>Git</li>
              <li>TestFlight</li>
              <li>Mobile Deployment</li>
            </ul>
          </Col>
          <Col lg={4} className="skill-card">
            <RiPencilRuler2Line />
            <h2>Designer</h2>
            <p className="lg">
              I value clean and simple design patterns and thoughtful UI/UX
              decisions.
            </p>
            <h3>Things I enjoy designing:</h3>
            <p className="sm">Web, Mobile, Apps, UI, UX</p>
            <h3>Design Skills:</h3>
            <ul>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>Adobe XD</li>
              <li>Wireframes</li>
              <li>Logo Design</li>
              <li>Pen & Paper</li>
            </ul>
          </Col>
          <Col lg={4} className="skill-card">
            <BiBookHeart />
            <h2>Mentor</h2>
            <p className="lg">
              I am empathy-driven and want to ensure everyone is coding to the
              best of their ability.
            </p>
            <h3>Experiences I draw from:</h3>
            <p className="sm">
              1000s of hours of dev experience, creating all types of projects
            </p>
            <h3>Mentorship Offerings:</h3>
            <ul>
              <li>Code Reviews</li>
              <li>Project Consultations</li>
              <li>One-on-one Instruction</li>
              <li>Rubber Ducking</li>
              <li>Product Testing</li>
              <li>Testing & Feedback</li>
            </ul>
          </Col>
        </Row>
      </div>
    </section>
  );
}
