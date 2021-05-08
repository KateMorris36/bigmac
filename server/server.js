require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');

app.use(express.json());
// app.use(express.static(path.join(__dirname, '../client/build')));

const bigMacRouter = require('./bigMac/bigMacRouter');
app.use('/', bigMacRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on the port::${process.env.PORT}`);
});
