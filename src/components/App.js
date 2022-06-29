import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Detail from "../routes/Detail";
import Home from "../routes/Home";

export default function App () {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/:id" exact component={Detail} />
    </Router>
  );
}