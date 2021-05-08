const axios = require('axios');
exports.ipLookup = async (req, res, next) => {
  // if (no location override)
  const apiResponse = await axios.get(
    `http://api.ipstack.com/${
      process.env.NODE_DEV_ENV ? '134.201.250.155' : req.ip
    }?access_key=${process.env.IPSTACK_API_KEY}`
  );
  res.data = { locationData: apiResponse.data };
  next();
};
