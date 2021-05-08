const csv = require('csv-parser');
const fs = require('fs');
const bigMac = [];

fs.createReadStream('../server/data/big-mac-index.csv')
  .pipe(csv())
  .on('data', (data) => bigMac.push(data));

exports.getList = (location, listCount) => {
  // grab random group of x if location in this group get another else add location to group and return
  // Tag location selected with something
};
