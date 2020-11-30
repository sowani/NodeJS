const validator = require ('validator');
const chalk = require ('chalk');
const yargs = require ('yargs');

console.log (validator.isEmail('sowani@gmail.com'));
console.log (chalk.green.bold ("Success!"));
console.log (process.argv);
console.log (yargs.argv);
