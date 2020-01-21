// @flow
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";
import { WallClock } from "./components/WallClock";

const App = () => (
  <Router>
    <Route path="*">
      <WallClock />
    </Route>
  </Router>
);

const DOMContainer = document.getElementById("app");
if (DOMContainer !== null) ReactDOM.render(<App />, DOMContainer);
