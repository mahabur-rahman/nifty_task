import React, { useContext, useState, useEffect } from "react";
import { Container, Form, Row, Col, Button, Spinner } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
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

  const location = useLocation();
  const id = location?.state?.data;

  useEffect(() => {
    // Clean up the message after 3 seconds
    const timer = setTimeout(() => {
      setMsg(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [msg]);

  if (!id) {
    return "no-activated";
  }

  // update profile
  const updateProfile = async (e) => {
    e.preventDefault();

    dispatch({ type: "UPDATE_START" });

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
        dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      } catch (err) {
        console.log(err);
        dispatch({ type: "UPDATE_FAILURE" });
      }
    }
  };

  return (
    <>
      <Container className="profile">
        <Row>
          <Col xl={6} lg={6} md={6} className="mx-auto mt-5 pt-5">
            <h1 className="text-center mb-5">Update Your Profile</h1>

            {id && (
              <div className="text-end">
                <Button variant="success" disabled>
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    className="mx-1"
                  />
                  Subscriptions Activated
                </Button>
              </div>
            )}

            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label className="fw-bold">Name :</Form.Label>
                <Form.Control
                  type="email"
                  placeholder={user?.name}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label className="fw-bold">Email :</Form.Label>
                <Form.Control type="email" placeholder={user?.email} disabled />
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
