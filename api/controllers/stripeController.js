const stripe = require("stripe")(process.env.STRIPE_KEY);

// create a payment with stripe
const createPaymentWithStripe = async (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        return res.status(500).json(err);
      } else {
        return res.status(200).json(stripeRes);
      }
    }
  );
};

module.exports = { createPaymentWithStripe };
