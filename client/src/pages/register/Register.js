import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [error, setError] = useState(false);

  const history = useHistory();

  const registerUser = async (e) => {
    e.preventDefault();

    setError(false);

    // validation of input field
    if (name === "") {
      toast.warning("name is required", {
        position: "top-center",
      });
    } else if (email === "") {
      toast.error("email is required", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.warning("includes @ in your email", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password is required", {
        position: "top-center",
      });
    } else if (gender === "") {
      toast.error("please choose your gender", {
        position: "top-center",
      });
    } else if (dateOfBirth === "") {
      toast.error("please choose date of birth", {
        position: "top-center",
      });
    } else {
      try {
        // api call
        const res = await axios.post(
          "http://localhost:8080/api/auth/register",
          {
            name,
            email,
            password,
            gender,
            dateOfBirth,
          }
        );

        setName("");
        setEmail("");
        setPassword("");
        setGender("");
        setDateOfBirth("");
        res.data && history.push("/login");
      } catch (err) {
        console.log(err);
        setError(true);
      }
    }
  };

  return (
    <>
      <Container className="register">
        <Row>
          <Col xl={6} lg={6} md={6} className="mx-auto mt-5 pt-5">
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label className="fw-bold">Name :</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label className="fw-bold">Email :</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="example@gmail.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label className="fw-bold">Password :</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="gender">
                <Form.Label className="fw-bold">Gender :</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option>choose an option</option>
                  <option>Male</option>
                  <option>Female</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="dob">
                <Form.Label className="fw-bold">Date of Birth :</Form.Label>
                <br />
                <input
                  type="date"
                  className="form-control"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                />
              </Form.Group>

              <div className="d-grid gap-2">
                <Button
                  variant="secondary"
                  type="submit"
                  onClick={registerUser}
                >
                  Register User
                </Button>
              </div>

              {error && (
                <div className="text-danger text-center">
                  User name and email must be unique!
                </div>
              )}
              <p className="text-center my-1">
                You have already an account? Please
                <Link to={`/login`} className="mx-1">
                  Login
                </Link>
              </p>
            </Form>

            {/* react toastify */}
            <ToastContainer />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
