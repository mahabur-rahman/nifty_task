import React, { useContext, useState } from "react";
// css
import "./login.css";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../context/Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState(false);
  // password show/hide state
  const [toggle, setToggle] = useState(false);

  // from context
  const { user, isFetching, dispatch } = useContext(UserContext);

  // navigate
  const history = useHistory();

  // loginUser
  const loginUser = async (e) => {
    e.preventDefault();
    setErrMsg(false);

    if (email === "") {
      toast.error("email is required!", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.warning("Includes @ in your email", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password is required", {
        position: "top-center",
      });
    } else {
      // API CALL
      dispatch({ type: "LOGIN_START" });
      try {
        const res = await axios.post("http://localhost:8080/api/auth/login", {
          email,
          password,
        });

        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        setEmail("");
        setPassword("");

        // navigate to home page
        res.data && history.push("/");
      } catch (err) {
        setErrMsg(true);
        console.log(err);
        dispatch({ type: "LOGIN_FAILURE" });
      }
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
              <Form.Group
                className="mb-3 pass_main_div"
                controlId="formGroupPassword"
              >
                <Form.Label className="fw-bold">Password :</Form.Label>
                <Form.Control
                  type={!toggle ? "password" : "text"}
                  placeholder="******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="showpass" onClick={() => setToggle(!toggle)}>
                  {!toggle ? "Show" : "Hide"}
                </div>
              </Form.Group>

              <div className="d-grid gap-2">
                <Button
                  variant="secondary"
                  type="submit"
                  onClick={loginUser}
                  disabled={isFetching}
                  className="login_btn"
                >
                  Login
                </Button>

                {errMsg && (
                  <div className="text-danger text-center">
                    Wrong credentials, please try again!
                  </div>
                )}
              </div>
              <p className="text-center my-1">
                Don't have an account? Please
                <Link to={`/register`} className="mx-1">
                  Register Now
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

export default Login;
