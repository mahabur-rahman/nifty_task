import React, { useContext, useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/Context";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [msg, setMsg] = useState(false);

  // context
  const { user, dispatch } = useContext(UserContext);

  // update profile
  const updateProfile = async (e) => {
    e.preventDefault();

    if (name === "") {
      toast.warning("please enter your name", {
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
      const updatedUser = {
        userId: user._id,
        name,
        gender,
        dateOfBirth,
      };

      try {
        // API CALL
        const res = await axios.put(
          `http://localhost:8080/api/users/${user._id}`,
          updatedUser
        );
        setName("");
        setGender("");
        setDateOfBirth("");
        setMsg(true);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <Container className="profile">
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
                <Form.Control type="email" placeholder={user?.email} disabled />
              </Form.Group>

              {/* <Form.Group className="mb-3" controlId="password">
                <Form.Label className="fw-bold">Password :</Form.Label>
                <Form.Control type="password" placeholder="******" />
              </Form.Group> */}

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
                  onClick={updateProfile}
                >
                  Update User
                </Button>
              </div>
              {msg && (
                <p
                  className="text-center my-1"
                  style={{ color: "#157347", fontWeight: "600" }}
                >
                  User has been updated successful!
                </p>
              )}
            </Form>

            {/* react toastify */}
            <ToastContainer />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
