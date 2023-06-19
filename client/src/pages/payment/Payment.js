import React from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import "./payment.css";

const Payment = () => {
  return (
    <>
      <Container>
        <h1 className="text-capitalize my-5 text-center pt-5">
          subscription plan
        </h1>
        <Row>
          <Col xl={5} lg={5} md={5} className="mx-auto">
            <Card className="text-center shadow shadow-sm">
              <Card.Body>
                <Card.Title className="plan_num">01</Card.Title>
                <Card.Title className="plan_title my-3">Economy</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>For the individuals</ListGroup.Item>
                  <ListGroup.Item>Source Online transfer</ListGroup.Item>
                  <ListGroup.Item>
                    Unlimited Styles for interface
                  </ListGroup.Item>
                  <ListGroup.Item>Reliable Customer Service</ListGroup.Item>
                </ListGroup>
                <div className="mt-3 mb-4">
                  <i className="total_cost">$10.00</i>
                  <span>/mo</span>
                </div>
                <Button className="btn purchase_btn">Purchase</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Payment;
