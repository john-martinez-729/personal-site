import React from "react";
import { Button, Carousel, Row, Col, Container, Image } from "react-bootstrap";
import fimobile from "../images/fimobile.png";
import midchains from "../images/midchains.png";
import mosaic from "../images/mosaic.png";
import onboarding from "../images/onboarding.png";
import dndvector from "../images/dndvector.png";
import necromunda from "../images/necromunda.png";

export default function Projects() {
  return (
    <div className="project-section">
      <Container>
        <div className="project-header">
          <h1 noGutters className="title">
            Projects
          </h1>
          <h2 noGutters className="subtitle">
            Here are a few projects I've been working on, both professionally
            and for fun.
          </h2>
        </div>
        <Row noGutters className="project-row">
          <Col md={4} className="project-col">
            <a
              className="project-link"
              href="https://drive.google.com/file/d/1Yz_HdEO7VY9f4w77eqzsKhupomviap5c/view?usp=sharing"
              target="_blank"
            >
              <div className="project-card">
                <Image src={fimobile} className="project-image" />
                <h3>FI Mobile</h3>
                <p>
                  An iOS and Android mobile app used for trading and maintaining
                  financial assets. Built with React Native, Redux-Saga and
                  other packages.
                </p>
              </div>
            </a>
          </Col>
          <Col md={4} className="project-col">
            <a
              className="project-link"
              href="https://mid-onboarding.fi-edition.com/"
              target="_blank"
            >
              <div className="project-card">
                <Image src={midchains} className="project-image" />
                <h3>MidChains Onboarding</h3>
                <p>
                  This application allows users to onboard themselves by filling
                  out admin-constructed forms. Built with React, Redux-Saga,
                  React Bootstrap and other packages.
                </p>
              </div>
            </a>
          </Col>
          <Col md={4} className="project-col">
            <a
              className="project-link"
              href="https://research.mexchange.online/"
              target="_blank"
            >
              <div className="project-card">
                <Image src={mosaic} className="project-image" />
                <h3>Mosaic Exchange</h3>
                <p>
                  Profile builder for financial assets. Users can sign up to
                  browse tailored news feeds, and read and view assets published
                  by other contributors.{" "}
                </p>
              </div>
            </a>
          </Col>
        </Row>
        <Row className="project-row">
          <Col md={4} className="project-col">
            <a
              className="project-link"
              href="https://risk.fi-edition.com/"
              target="_blank"
            >
              <div className="project-card">
                <Image src={onboarding} className="project-image" />
                <h3>FI Onboarding & Risk Tools</h3>
                <p>
                  Constructed admin and user tools for onboarding and risk
                  management tools.
                </p>
              </div>
            </a>
          </Col>
          <Col md={4} className="project-col">
            <a
              className="project-link"
              href="https://john-martinez-729.github.io/open-hive-war/"
              target="_blank"
            >
              <div className="project-card">
                <Image src={dndvector} className="project-image" />
                <h3>D&D Horde Battler</h3>
                <p>
                  Simulate large battles between large groups of creatures
                  utilizing D&D's d20 system.
                </p>
              </div>
            </a>
          </Col>
          <Col md={4} className="project-col">
            <a
              className="project-link"
              href="https://john-martinez-729.github.io/dnd-horde-battler/"
              target="_blank"
            >
              <div className="project-card">
                <Image src={necromunda} className="project-image" />
                <h3>Open Hive War</h3>
                <p>
                  Automatically generate missions for Necromunda using the Open
                  Hive War cards system.
                </p>
              </div>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
