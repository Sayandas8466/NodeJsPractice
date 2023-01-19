const chalk = require("chalk");
const validator = require("validator");

console.log(chalk.blue.inverse("Hello World"));

const res =validator.isEmail("sayandas8466@gmail.com");
console.log(res);