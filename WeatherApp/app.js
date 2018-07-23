const yargs = require("yargs");
const request = require("request");

const callback = require("./helper");
const geocode = require("./geocode");
const { weather } = require("./weather");

console.log(geocode);

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

geocode(argv.a, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(results.address);
    weather(results, callback);
  }
});
