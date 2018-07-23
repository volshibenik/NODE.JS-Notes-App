const callback = (errorMessage, results) =>
  errorMessage
    ? console.log(errorMessage)
    : console.log(JSON.stringify(results, undefined, 2));

module.exports = callback;
