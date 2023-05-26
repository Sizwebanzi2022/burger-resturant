const express = require('express')
const path = require('path')
// This is your test secret API key.
const stripe = require("stripe")('sk_test_51MzLlAIOqWaEvMUbhihoeikB7aTo59w566GrqWKTU4FRozgFXjgqfpFndKYu6qMEFKeKoUKLmQFnXkzGacsooi67008hfpW4pE');



const app = express();
//  Body parser for post rquest
const bodyParser = require('body-parser');
 app.use(bodyParser.json()); 


//  routes
app.use(express.static(path.join(__dirname,'public')))
app.use('/',require('./routes/index'))

const calculateOrderAmount = (items) => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400;
  };
  
  app.post("/create-payment-intent", async (req, res) => {
    const { items } = req.body;
  
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });
  
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  });
  



  app.listen(4242, () => console.log("Node server listening on port 4242!"));