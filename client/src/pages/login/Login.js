import React, { useContext, useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../context/Context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // from context
  const { user, isFetching, error, dispatch } = useContext(UserContext);

  // loginUser
  const loginUser = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:8080/api/auth/login", {
        email,
        password,
      });

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      console.log(res.data);
    } catch (err) {
      console.log(err);
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <>
      <Container className="login">
        <Row>
          <Col xl={6} lg={6} md={6} className="mx-auto mt-5 pt-5">
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label className="fw-bold">Email address :</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label className="fw-bold">Password :</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <div className="d-grid gap-2">
                <Button variant="secondary" type="submit" onClick={loginUser}>
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
