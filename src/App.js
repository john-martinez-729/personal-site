import React, { useState } from "react";
import {
  Topbar,
  Header,
  Hero,
  Skills,
  Footer,
  Projects,
  ContactMe,
  Resume,
} from "./components";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function mainBody() {
    console.log(
      "Thanks for checking out my page! Please feel free to look around and send me feedback on my site if you have any. I am always looking to improve my development skills!"
    );
    console.log(
      "If you're interested in hiring me, please check out my resume and shoot me a message via my contact form. :)"
    );
    return (
      <div className="main">
        <ContactMe show={show} handleClose={handleClose} />
        <Header />
        <Hero handleShow={handleShow} />
        <Skills />
        <Projects />
      </div>
    );
  }

  return (
    <Router>
      <Topbar handleShow={handleShow} />
      <Switch>
        <Route exact path="/" component={mainBody} />
        <Route exact path="/resume" component={Resume} />
      </Switch>
      <Footer handleShow={handleShow} />
    </Router>
  );
}
