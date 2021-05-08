// INTERFACE DEPRECATED DUE TO API ERRORS
// IP Stack implemented to server as replacement

const axios = require('axios');
const instance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
  headers: { 'User-Agent': 'request' },
});
exports.ipLookup = async (req, res) => {
  // if (no location override)
  console.log('looking up ip address');
  const data = await instance.get('http://ipvigilante.com/8.8.8.a/full');
};
