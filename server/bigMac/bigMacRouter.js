const express = require('express');
const bigMacController = require('./bigMacController.js');

const router = express.Router();

router.route('/').get(bigMacController.getBigMac); //TODO: add ip middleware function

module.exports = router;
