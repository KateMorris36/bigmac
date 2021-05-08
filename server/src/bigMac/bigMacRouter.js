const express = require('express');
const bigMacController = require('./bigMacController.js');
const ipStack = require('../interface/ipStack');

const router = express.Router();

router.route('/').get(ipStack.ipLookup, bigMacController.getBigMac);

module.exports = router;
