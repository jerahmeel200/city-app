import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Mandate from "./pages/Mandate";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about-us">
            <About />
          </Route>

          <Route path="/our-team">
            <Team />
          </Route>

          <Route path="/our-mandate">
            <Mandate />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
