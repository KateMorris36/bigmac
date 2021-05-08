module.exports = {
  get: () => {
    return Promise.resolve({
      data: {
        locationList: [
          {
            Country: 'United States',
          },
          {
            Country: 'Canada',
          },
        ],
      },
    });
  },
};
