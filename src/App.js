import React, { useState } from "react";
import {
  Topbar,
  Header,
  Hero,
  Skills,
  Footer,
  Projects,
  ContactMe,
} from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
    return (
      <div className="app">
        <ContactMe show={show} handleClose={handleClose} />
        <Header />
        <Hero />
        <Skills />
        <Projects />
      </div>
    );
  }

  return (
    <Router>
      <Topbar handleShow={handleShow} />
      <Switch>
        <Route path="/" component={mainBody} />
      </Switch>
      <Footer />
    </Router>
  );
}
