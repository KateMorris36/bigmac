const bigMacModel = require('./bigMacModel');

exports.getBigMac = async (req, res, next) => {
  const locationList = bigMacModel.getList(res.data.locationData, 2);
  res.status(200).send({ locationList });
};
