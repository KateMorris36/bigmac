const express = require('express');
const bigMacController = require('./bigMacController.js');
const ipVigilante = require('../interface/ipVigilante');

const router = express.Router();

router.route('/').get(ipVigilante.ipLookup, bigMacController.getBigMac); //TODO: add ip middleware function

module.exports = router;
