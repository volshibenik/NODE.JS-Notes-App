const request = require("request");

/**
 * @param {string} address - user input address to search geocode for.
 * @param {function} callback args: 1) error, 2) results obj
 */
const geocode = (address, callback) => {
  const uri = encodeURIComponent(address);
  console.log(uri);
  return request(
    {
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${uri}`,
      json: true
    },
    (error, resp, body) => {
      if (error) {
        callback(error);
      } else if (body.status === "ZERO_RESULTS") {
        callback("nothing found");
      } else if (body.status === "OK") {
        const resultsOb = {
          address: body.results[0].formatted_address,
          lat: body.results[0].geometry.location.lat,
          lng: body.results[0].geometry.location.lng
        };
        callback(undefined, resultsOb);
      } else {
        callback("unknown error");
      }
    }
  );
};

module.exports = geocode;
