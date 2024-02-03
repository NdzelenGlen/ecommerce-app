const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')
('sk_test_51Oe8F6DmEFpczxKzMt0E6Z8UNlWHLrtLMf1DRsGwQuXLMqOe9vwc6jPaa4VUjeJmYntQUIoKioWWAtMu8iWlU7No00FOTQsC2w')

// //api
// //app config
const app = express();
// //middlewares
app.use(cors({origin:true}))
app.use(express.json());

// //api routes
app.get('/' , (request,response) => response.status(200).send('h'))
app.post('/payments/create', async (request,response) => {
    const total = request.query.total;
    console.log('payment request recieved booooooooooooooooom',total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency:'usd',
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })

})
// //listen command
exports.api =functions.https.onRequest(app)

// //exa,ple endpoint
