import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Hero() {
  return (
    <section className="primary-section">
      <Row style={{ justifyContent: "center" }}>
        <Col sm={7}>
          <h2 className="hero-title">Hi, I'm John. Nice to meet you!</h2>
          <p className="hero-p">
            Since beginning my software development journey in 2019, I've worked
            with the fintech startup Fundamental Interactions. Here I consult
            with clients, and collaborate with talented designers and brilliant
            managers to create digital products for both business and consumer
            use.
          </p>
        </Col>
      </Row>
    </section>
  );
}
