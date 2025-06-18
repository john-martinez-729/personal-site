import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Hero({ handleShow }) {
  return (
    <section className="primary-section">
      <div className="container">
        <h2>Hi, I'm John. Thanks for checking out my portfolio!</h2>

        <p>
          I’m a software engineer with over {new Date().getFullYear() - 2019}{" "}
          years of experience building scalable, high-performance web and mobile
          applications using React, TypeScript, and Node.js.
        </p>

        <p>
          I'm passionate about software development, with a strong focus on
          pixel-perfect UI/UX, technical communication, and team leadership.
        </p>

        <p>
          I mentor new and aspiring software developers through resume and
          portfolio reviews, practice interviews, and more. I'm proud to say
          that every mentee I've worked with has landed their first development
          job within a few weeks of our sessions!
        </p>

        <p>
          If you'd like to connect, please feel free to{" "}
          <span
            onClick={handleShow}
            className="footer-link"
            style={{ marginRight: "0" }}
          >
            contact me
          </span>
          , or check out my{" "}
          <Link to="/resume" className="footer-link">
            resume
          </Link>{" "}
          for more ways to reach out!
        </p>
      </div>
    </section>
  );
}
