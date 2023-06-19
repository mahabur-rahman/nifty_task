const express = require("express");
const router = express.Router();
const { createPaymentWithStripe } = require("../controllers/stripeController");

// create payment with stripe
router.post("/payment", createPaymentWithStripe);

module.exports = router;
