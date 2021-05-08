require('dotenv').config();
const express = require('express');
var cors = require('cors');

// SETUP
const app = express();

//MIDDLEWARE
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

//ROUTES
const bigMacRouter = require('./src/bigMac/bigMacRouter');
app.use('/api/bigMac', bigMacRouter);

app.get('/', (req, res) => res.send('Hello world!'));

// INIT
const port = process.env.PORT || 3080;
app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});

module.exports = app;
