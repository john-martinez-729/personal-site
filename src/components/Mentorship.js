import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { BiPyramid, BiCube } from "react-icons/bi";
import { RiPencilRuler2Line } from "react-icons/ri";
import { GiD4, GiD12, GiDiceTwentyFacesTwenty } from "react-icons/gi";

export default function Mentorship() {
  return (
    <div style={{ textAlign: "center" }}>
      <section style={{ padding: "48px" }}>
        <h1 noGutters className="title">
          I offer mentorship options for software developers
        </h1>
        <h2 noGutters className="subtitle">
          If you are looking for a mentorship, or simply want to ask some
          questions, then please feel free to contact me!
        </h2>
      </section>

      <section className="primary-section">
        <Row style={{ justifyContent: "center" }}>
          <Col sm={7}>
            <h2
              style={{
                color: "white",
                fontWeight: "bold",
                marginBottom: "32px",
              }}
            >
              Being a software developer is tough.
            </h2>
            <p
              style={{
                color: "white",
                fontWeight: "300",
              }}
            >
              Every day more and more people are switching careers to the
              exciting world of software development. I ventured down a similar
              path it was the best decision of my life!
            </p>
            <p
              style={{
                color: "white",
                fontWeight: "300",
              }}
            >
              A few years ago I was working in restaurants as a chef. Barely
              able to afford my rent, I found myself becoming stressed and
              isolated, the long hours and hard work taking its toll. I started
              to think about what I wanted out of a career, and I decided on
              three main priorities: Decent pay, the ability to work from home,
              and the option to be creative. Software development hit all three!
            </p>
            <p
              style={{
                color: "white",
                fontWeight: "300",
              }}
            >
              I left my restaurant job and found temp work to pay the bills.
              This slower-paced job helped give me the time and energy necessary
              to practice coding. From there I was accepted to Flatiron School,
              and several months later I was in my first professional software
              development position.
            </p>
            <p
              style={{
                color: "white",
                fontWeight: "300",
              }}
            >
              I want to help aspiring developers get to at least where I am
              today. I've spoken to dozens of prospective developers, designers
              and engineers over the past few years, and helped set them on the
              right path towards a career they can be proud of.
            </p>
            <p
              style={{
                color: "white",
                fontWeight: "300",
                marginBottom: "120px",
              }}
            >
              I also offer assistance to those currently in the field, whether
              it's be teaching specific technologies, reviewing their code, or
              testing their products. So whether you're new to the field or
              looking for some guidance and support, I'm here to help!
            </p>
          </Col>
        </Row>
      </section>
      <section className="skills-section">
        <div className="box-shadow">
          <Row>
            <Col
              className="skill-card"
              style={{
                borderRight: "1px solid #E6ECF8",
                borderBottom: "0px solid #E6ECF8",
              }}
            >
              <GiD4 className="skill-icon" />
              <h2 className="skill-card-title">Quick Meeting</h2>
              <h2 className="mentorship-price">$60</h2>
              <p className="skill-content lg">
                1 hour of casual conversation and advice as needed with no
                long-term commitments.
              </p>
              <h3 className="skill-title">Good for:</h3>
              <p className="skill-content lg">
                New developers and those who need guidance on next steps
              </p>
              <Button className="booking-btn">Book a quick meeting</Button>
            </Col>
            <Col
              className="skill-card"
              style={{
                borderRight: "1px solid #E6ECF8",
                borderBottom: "0px solid #E6ECF8",
              }}
            >
              <GiD12 className="skill-icon" />
              <h2 className="skill-card-title">Path Support</h2>
              <h2 className="mentorship-price">$200</h2>
              <p className="skill-content lg">
                4 hours of assistance meant to keep you on the right track and
                constantly moving forward.
              </p>
              <h3 className="skill-title">Good for:</h3>
              <p className="skill-content lg">
                Developers in the middle of a small project, students in the
                middle of a bootcamp or coding class
              </p>
              <Button className="booking-btn">Book path support</Button>
            </Col>
            <Col className="skill-card">
              <GiDiceTwentyFacesTwenty className="skill-icon" />
              <h2 className="skill-card-title">Full Mentorship</h2>
              <h2 className="mentorship-price">$500</h2>
              <p className="skill-content lg">
                12 hours of professional coaching and collaboration.
              </p>
              <h3 className="skill-title">Good for:</h3>
              <p className="skill-content lg">
                Developers working on large projects or need to meet a deadline
              </p>
              <Button className="booking-btn">Book a full mentorship</Button>
            </Col>
          </Row>
        </div>
      </section>
      <section style={{ padding: "48px" }}>
        <h2 noGutters style={{ fontSize: "24px" }}>
          Want to learn more about what mentorship with me entails?
        </h2>
        <p
          style={{
            color: "white",
            fontWeight: "300",
          }}
        >
          Schedule a free consultation to ask questions and discuss details!
        </p>
        <Button className="outline-btn">Book a consultation</Button>
      </section>
    </div>
  );
}
