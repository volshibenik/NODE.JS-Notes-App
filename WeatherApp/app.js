const yargs = require("yargs");

const geocode = require("./geocode");
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
  errorMessage
    ? console.log(errorMessage)
    : console.log(JSON.stringify(results, undefined, 2));
});
