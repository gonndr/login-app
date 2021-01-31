import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";

export default function Login({ onLogin, isLogged }) {
  const [emailVal, setEmailVal] = useState("");
  const [passVal, setPassVal] = useState("");
  const [loggedIn, setLoggedIn] = useState(isLogged);

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(emailVal);
    console.log(passVal);

    // fake authentication
    if (true) {
      onLogin();
      setLoggedIn(true);
    }
  };

  const renderLogin = () => {
    if (isLogged) {
      return <Redirect to="/home" />;
    } else {
      return (
        <div className="container jumbotron">
          <Form onSubmit={onFormSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmailVal(e.target.value)}
                value={emailVal}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassVal(e.target.value)}
                value={passVal}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </div>
      );
    }
  };

  return renderLogin();
}
