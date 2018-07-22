const request = require("request");
const yargs = require("yargs");

const argv = yargs
  .options({
    address: {
      alias: "a",
      demand: true,
      string: true,
      describe: "address to show weather"
    }
  })
  .help()
  .alias("help", "h").argv;

console.log(argv);
const uri = encodeURIComponent(argv.address);
console.log(uri);

request(
  {
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${uri}`,
    json: true
  },
  (error, resp, body) =>
    console.log(
      body.results[0].formatted_address,
      `address: lat: ${body.results[0].geometry.location.lat}, lng: ${
        body.results[0].geometry.location.lng
      }`
    )
);
