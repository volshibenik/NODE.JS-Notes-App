const request = require("request");

const endpoint = "https://api.darksky.net/forecast/";
const key = "e17f68c6cbbe10c016e2afdd14d0255a/";

const currentWeather = (coordsObj, callback) => {
  const { lat, lng } = coordsObj;

  const url = `${endpoint}${key}${lat},${lng}`;

  const req = request({ url, json: true }, (error, response, body) => {
    if (error) {
      callback(error);
    } else if (response.statusCode === 200) {
      callback(undefined, {
        temp: body.currently.temperature,
        "feels like": body.currently.apparentTemperature
      });
    } else {
      callback("bad request");
    }
  });
};

module.exports.weather = currentWeather;
