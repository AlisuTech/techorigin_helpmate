const express = require('express')
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2022-08-01",
  });
// const YOUR_DOMAIN = `http://localhost:${PORT}`;
const router = express.Router()

router.post('/create-checkout-session', async (req, res) => {
	const session = await stripe.checkout.sessions.create({
	  line_items: [ 
		{
		  // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
		  amount: 1000
		},
	  ],
	  mode: 'payment',
	//   success_url: `${YOUR_DOMAIN}?success=true`,
	//   cancel_url: `${YOUR_DOMAIN}?canceled=true`,
	  success_url: `${process.env.CLIENT_URL}/checkout-success`,
	  cancel_url: `${process.env.CLIENT_URL}/login`,
	});
  
	// res.redirect(303, session.url);
	res.send({url: session.url})
  });

module.exports = router;