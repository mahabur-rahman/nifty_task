import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <Container className="register">
        <Row>
          <Col xl={6} lg={6} md={6} className="mx-auto mt-5 pt-5">
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label className="fw-bold">Name :</Form.Label>
                <Form.Control type="email" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label className="fw-bold">Email :</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="example@gmail.com"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label className="fw-bold">Password :</Form.Label>
                <Form.Control type="password" placeholder="******" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="gender">
                <Form.Label className="fw-bold">Gender :</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>choose an option</option>
                  <option>Male</option>
                  <option>Female</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="dob">
                <Form.Label className="fw-bold">Date of Birth :</Form.Label>
                <br />
                <input type="date" className="form-control" />
              </Form.Group>

              <div className="d-grid gap-2">
                <Button variant="secondary" type="submit">
                  Register User
                </Button>
              </div>
              <p className="text-center my-1">
                You have already an account? Please
                <Link to={`/login`} className="mx-1">
                  Login
                </Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
