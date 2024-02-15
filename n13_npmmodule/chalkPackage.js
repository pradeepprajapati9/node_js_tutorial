const chalk = require('chalk');
const validator = require("validator");
console.log(chalk.blue('hello world'))
console.log(chalk.green('hello world'))
console.log(chalk.red('hello world'))
console.log(chalk.yellow('hello world'))
console.log(chalk.magenta('hello world'))
console.log(chalk.cyan('hello world'))
console.log(chalk.white('hello world'))
console.log(chalk.bgBlue('hello world'))
console.log(chalk.red.underline.inverse("danger"))
console.log(chalk.green.underline.inverse("sucees"))

const valid = validator.isEmail('abc133@gmail.com');
console.log(valid ? chalk.green.inverse(valid) : chalk.red.inverse(valid)); 

console.log(__filename)
console.log(__dirname)