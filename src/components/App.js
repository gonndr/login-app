import React, { useState } from "react";
import Login from "./Login";
import NavbarComp from "./NavbarComp";
import Register from "./Register";
import Home from "./Home";
import Private from "./Private";
import Logout from "./Logout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { AUTH_TOKEN } from "../constants";

// Fake auth object
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100); // fake async
  },
};

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const authToken = localStorage.getItem(AUTH_TOKEN);

  const onLogin = () => {
    fakeAuth.authenticate(() => {
      setLoggedIn(true);
    });
    console.log(fakeAuth.isAuthenticated);
  };

  const onLogout = () => {
    fakeAuth.signout(() => {
      setLoggedIn(false);
    });
    localStorage.removeItem(AUTH_TOKEN);
    console.log(fakeAuth.isAuthenticated);
  };

  return (
    <div className="container-fluid">
      <NavbarComp isLogged={loggedIn} />
      <Switch>
        <Route
          path="/login"
          render={(props) => (
            <Login {...props} onLogin={onLogin} isLogged={loggedIn} />
          )}
        />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} />
        <Route
          path="/logout"
          render={(props) => <Logout {...props} onLogout={onLogout} />}
        />
        <PrivateRoute component={Private} path="/private" exact />
      </Switch>
    </div>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
