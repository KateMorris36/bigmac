const bigMacModel = require('./bigMacModel');

exports.getBigMac = async (req, res, next) => {
  const locationList = bigMacModel.getList(res.data.locationData, 10);
  // if (budget sent)
  // present the number of hamburgers/budget
  // foreach (add element with result of math)
  // else present cost of hamburger
  //render index with data
  res.status(200).data({ locationList });
};
