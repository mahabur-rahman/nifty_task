import React, { useContext, useState, useEffect } from "react";
import { Container, Form, Row, Col, Button, Spinner } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../../context/Context";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Settings from "../../components/settings/Settings";

const Profile = () => {
  const location = useLocation();
  const id = location?.state?.data?.id;
  console.log(id);

  return (
    <>
      <Container className="profile">
        <Row>
          <Col xl={6} lg={6} md={6} className="mx-auto mt-5 pt-5">
            <h1 className="text-center mb-5">Update Your Profile</h1>

            {id ? (
              <>
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

                <Settings />
              </>
            ) : (
              <Settings />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
