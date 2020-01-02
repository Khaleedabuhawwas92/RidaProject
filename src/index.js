import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import calculus1 from "views/Calculus1/calu1.js";
import calculus2 from "views/Calculus2/calu2.js";
import calculus3 from "views/Calculus3/calu3.js";
import tawjihi from "views/tawjihi/tawjihi.js";
import diffEeq from "views/diff-eq/diff-eq.js";
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/calculus1-page" component={calculus1} />
      <Route path="/calculus2-page" component={calculus2} />
      <Route path="/calculus3-page" component={calculus3} />
      <Route path="/diffEq-page" component={diffEeq} />
      <Route path="/tawjihi-page" component={tawjihi} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
