require('dotenv').config();
const express = require('express');

// SETUP
const app = express();

//MIDDLEWARE
app.use(express.json());

//ROUTES
const bigMacRouter = require('./bigMac/bigMacRouter');
app.use('/api/bigMac', bigMacRouter);

app.get('/', (req, res) => res.send('Hello world!'));

// INIT
const port = process.env.PORT || 3080;
app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
