const csv = require('csv-parser');
const fs = require('fs');
const bigMac = [];

//Load in Data from CSV, Remove Duplicates per country using the latest data only
fs.createReadStream('../server/data/big-mac-index.csv')
  .pipe(csv())
  .on('data', (data) => {
    let countryDup = bigMac.findIndex(
      (element) => element.Country === data.Country
    );
    if (countryDup === -1) bigMac.push(data);
    else if (bigMac[countryDup].Date < data.Date) {
      bigMac[countryDup] = data;
    }
  });

exports.getList = (location, listCount) => {
  let locationList = [];

  //Add Selected Location
  const filteredBigMac = bigMac.filter(
    (element) => element.Country === location.country_name
  );
  locationList.push(filteredBigMac);

  //Add Random Location to fill out the List, No Duplicates
  while (locationList.length < listCount) {
    let randLocation = bigMac[Math.floor(Math.random() * bigMac.length)];
    if (
      locationList.find((element) => element.Country === randLocation.Country)
    )
      continue;
    else locationList.push(randLocation);
  }
  return locationList;
};
