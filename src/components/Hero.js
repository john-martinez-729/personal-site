import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Hero() {
  return (
    <section className="primary-section">
      <Row style={{ justifyContent: "center" }}>
        <Col sm={7} style={{ padding: 0, margin: 0 }}>
          <h2 className="hero-title">Hi, I'm John. Nice to meet you!</h2>
          <p className="hero-p">
            My software development journey began in 2019 with a position at the
            fintech startup Fundamental Interactions. Here I consult with
            clients and collaborate with talented designers and brilliant
            managers to create digital products for both business and consumer
            use.
          </p>
        </Col>
      </Row>
    </section>
  );
}
