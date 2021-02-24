import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect, useHistory } from "react-router-dom";

export default function Login({ onLogin, isLogged }) {
  const [formState, setFormState] = useState({
    login: isLogged,
    email: "",
    password: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();

    // fake authentication
    if (true) {
      onLogin();
      setFormState({
        ...formState,
        login: true,
      });
    }
  };

  const renderLogin = () => {
    if (formState.login) {
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
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    email: e.target.value,
                  })
                }
                value={formState.email}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    password: e.target.value,
                  })
                }
                value={formState.password}
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
