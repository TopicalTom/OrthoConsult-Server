const express = require('express');
const cors = require('cors');
require('dotenv').config({path: './.env'});
//const createCheckoutSession = require('./api/checkout');

const app = express();
const port = 8081;

app.use(express.json({
    verify: (req, res, buffer) => req['rawBody'] = buffer, 
}));

app.use(cors({ origin: true }));

app.get('/', (req, res) => res.send('OrthoConsult Back-End'));

//app.post('/create-checkout-session', createCheckoutSession);

app.listen(port, () => console.log('server listening on port', port));