import React from "react";

export default function Hero() {
  return (
    <section className="primary-section">
      <div className="container">
        <h2>Hi, I'm John. Thanks for checking out my portfolio!</h2>

        <p>
          I’m a software developer with over {new Date().getFullYear() - 2019}{" "}
          years of experience building scalable, high-performance web and mobile
          applications using React, TypeScript, and Node.js.
        </p>

        <p>
          I'm passionate about front-end development, with a strong focus on
          pixel-perfect UI/UX, performance optimization, and team leadership.
        </p>

        <p>
          At Tactacam — my most recent company — I served as the primary
          front-end developer on the Admin Panel system, an internal tool used
          by CSRs to manage user accounts and cameras. I led the development of
          the platform from the ground up, established coding and testing
          standards, and helped scale the front-end team — resulting in a major
          increase in output and platform improvements.
        </p>

        <p>
          Outside of professional work, I also mentor new and aspiring software
          developers. I offer resume and portfolio reviews, conduct practice
          interviews, and work one-on-one to help clients reach their career
          goals. I'm proud to say that every mentee I've worked with has landed
          their first development job within a few weeks of our sessions.
        </p>

        <p>
          If you'd like to connect, feel free to contact me using the button
          above, or check out my resume for more ways to reach me!
        </p>
      </div>
    </section>
  );
}
