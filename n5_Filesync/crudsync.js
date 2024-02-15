const fs = require("fs");

// creating folder 
fs.mkdirSync("Firstclass");

 
// creating file and store data
fs.writeFileSync("Firstclass/firstc.txt","wellcome to my channel and i hope you will enjoy this person who is reading");

// append file
fs.appendFileSync("Firstclass/firstc.txt", "my name is pradeep");


// utf8 convert to string 
const data = fs.readFileSync("Firstclass/firstc.txt", "utf8");
console.log(data)

// buffer data read
const data1 = fs.readFileSync("Firstclass/firstc.txt")

// convert to string
const fileread = data1.toString()
console.log(fileread);

// rename file
fs.renameSync("Firstclass/firstc.txt","Firstclass/first1.txt")

// delete file
fs.unlinkSync("Firstclass/first1.txt");

// folder delete
fs.rmdirSync("Firstclass");

 