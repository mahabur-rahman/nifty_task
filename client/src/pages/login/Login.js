import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Container className="login">
        <Row>
          <Col xl={6} lg={6} md={6} className="mx-auto mt-5 pt-5">
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label className="fw-bold">Email address :</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label className="fw-bold">Password :</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <div className="d-grid gap-2">
                <Button variant="secondary" type="submit">
                  Login
                </Button>
              </div>
              <p className="text-center my-1">
                Don't have an account? Please
                <Link to={`/register`} className="mx-1">
                  {" "}
                  Register Now
                </Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
