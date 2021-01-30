import React from "react";
import Login from "./Login";
import NavbarComp from "./NavbarComp";
import Register from "./Register";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="container-fluid">
      <NavbarComp />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
