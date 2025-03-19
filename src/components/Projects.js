import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import fimobile from "../images/fimobile.png";
import midchains from "../images/midchains.png";
import mosaic from "../images/mosaic.png";
import onboarding from "../images/onboarding.png";
import dndvector from "../images/dndvector.png";
import necromunda from "../images/necromunda.png";
import tactacam from "../images/tactacam-logo.png";
import reveal from "../images/reveal-logo.png";
import defend from "../images/defend-logo.jpg";

export default function Projects() {
  return (
    <section className="project-section">
      <div className="container">
        <div className="project-header">
          <h2>Projects</h2>
          <p>
            Here are a few projects I've been working on, both professionally
            and for fun.
          </p>
        </div>
        <Row>
          <Col md={4}>
            <a
              className="project-link"
              href="https://youtu.be/hnDsr662-5g"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-card">
                <Image src={fimobile} alt="FI Mobile Logo" />
                <h3>FI Mobile</h3>
                <p>
                  An iOS and Android mobile app used for trading and maintaining
                  financial assets. Built with React Native, Redux-Saga and
                  other packages.
                </p>
              </div>
            </a>
          </Col>
          <Col md={4}>
            <a
              className="project-link"
              href="https://mid-onboarding.fi-edition.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-card">
                <Image src={midchains} alt="MidChains Logo" />
                <h3>MidChains Onboarding</h3>
                <p>
                  A web app that allows admins to create forms for users to
                  onboard themselves. Built with React, Redux-Saga, React
                  Bootstrap and other packages.
                </p>
              </div>
            </a>
          </Col>
          <Col md={4}>
            <a
              className="project-link"
              href="https://research.mexchange.online/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-card">
                <Image src={mosaic} alt="Mosaic Logo" />
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
        <Row>
          <Col md={4}>
            <a
              className="project-link"
              href="https://risk.fi-edition.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-card">
                <Image src={onboarding} alt="Onboarding Logo" />
                <h3>FI Onboarding & Risk Tools</h3>
                <p>
                  Constructed admin and user tools for onboarding and risk
                  management tools.
                </p>
              </div>
            </a>
          </Col>
          <Col md={4}>
            <a
              className="project-link"
              href="https://john-martinez-729.github.io/dnd-horde-battler/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-card">
                <Image src={dndvector} alt="Horde Battler Logo" />
                <h3>D&D Horde Battler</h3>
                <p>
                  Simulate large battles between hordes of creatures utilizing
                  D&D's d20 system.
                </p>
              </div>
            </a>
          </Col>
          <Col md={4}>
            <a
              className="project-link"
              href="https://john-martinez-729.github.io/open-hive-war/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-card">
                <Image src={necromunda} alt="Open Hive War Logo" />
                <h3>Open Hive War</h3>
                <p>
                  Automatically generate missions for Necromunda using the Open
                  Hive War cards system.
                </p>
              </div>
            </a>
          </Col>
        </Row>
        {/* Tactacam */}
        <Row>
          <Col md={4}>
            <a
              className="project-link"
              href="https://www.tactacam.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-card">
                <Image
                  src={tactacam}
                  alt="Tactacam Logo"
                  style={{ borderRadius: "15px" }}
                />
                <h3>Admin Panel by Tactacam</h3>
                <p>
                  A platform for Tactacam CSRs to manage and assist user
                  accounts and data.
                </p>
              </div>
            </a>
          </Col>
          <Col md={4}>
            <a
              className="project-link"
              href="https://account.revealcellcam.com/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-card">
                <Image
                  src={reveal}
                  alt="Reveal Logo"
                  style={{ borderRadius: "15px" }}
                />
                <h3>REVEAL by Tactacam</h3>
                <p>
                  A mobile application for Android and iOS that allows users to
                  manage their Tactacam REVEAL cameras.
                </p>
              </div>
            </a>
          </Col>
          <Col md={4}>
            <a
              className="project-link"
              href="https://account.defendcellcam.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-card">
                <Image src={defend} alt="Defend Logo" />
                <h3>DEFEND by Tactacam</h3>
                <p>
                  A mobile application for Android and iOS that allows users to
                  manage their Tactacam DEFEND cameras.
                </p>
              </div>
            </a>
          </Col>
        </Row>
      </div>
    </section>
  );
}
