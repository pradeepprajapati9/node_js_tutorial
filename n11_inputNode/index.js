// set input from command line 
// create file with input 
// delete file with input

// user input give command like:node index.js hello
// console.log(process.argv);

// access input
// console.log(process.argv[3])

// create file give command like:node index.js demo.txt "data loaded"
// const fs=require("fs");
// const input=process.argv;
// fs.writeFileSync(input[2],input[3]);

// create and data loaded from input command give command like:node index.js add demo.txt "data loaded" 
const fs = require("fs");
const input = process.argv;

if (input[2] == "add") {
    fs.writeFileSync(input[3], input[4]);
} else if (input[2] == "remove") {
    fs.unlinkSync(input[3]);
} else {
    console.log("invalid input");
}