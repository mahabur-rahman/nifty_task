import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import "./payment.css";
// stripe
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Payment = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // publishable key from (stripe.com)
  const KEY = process.env.REACT_APP_STRIPE;
  const history = useHistory();

  // stripe onToken
  const onToken = (token) => {
    setStripeToken(token);
  };

  // API call
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:8080/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 1000,
          }
        );

        console.log(`res data: `, res.data);
        setPaymentProcessing(false);
        setPaymentSuccess(true);
      } catch (err) {
        console.log(err);
        setPaymentProcessing(false);
      }
    };

    if (stripeToken) {
      setPaymentProcessing(true);
      makeRequest();
    }
  }, [stripeToken]);

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

                {paymentSuccess ? (
                  <div className="success_message">Payment Successful!</div>
                ) : paymentProcessing ? (
                  <div className="processing_message">
                    Processing, Please wait...
                  </div>
                ) : (
                  <>
                    {!stripeToken && (
                      <StripeCheckout
                        name="Nifty IT Solution Ltd."
                        image="https://plus.unsplash.com/premium_photo-1679826780125-a07070522053?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"
                        billingAddress
                        shippingAddress
                        description={`Your total is : $10`}
                        amount={10 * 100}
                        token={onToken}
                        stripeKey={KEY}
                      >
                        <Button className="btn purchase_btn">Purchase</Button>
                      </StripeCheckout>
                    )}
                  </>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Payment;
