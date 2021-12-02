import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Topbar,
  Header,
  Hero,
  Skills,
  Footer,
  Mentorship,
  Projects,
} from "./components";
import { BiCodeAlt, BiBookHeart, BiCopyright } from "react-icons/bi";
import { RiPencilRuler2Line, RiReactjsFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  function mainBody() {
    return (
      <div className="app">
        <Header />
        <Hero />
        <Skills />
        <Projects />
      </div>
    );
  }

  function mentorship() {
    return <Mentorship />;
  }

  return (
    <Router>
      <Topbar />
      <Switch>
        <Route path="/" component={mainBody} />
      </Switch>
      <Footer />
    </Router>
  );
}
