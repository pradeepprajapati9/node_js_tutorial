const fs = require("fs");

// file creatiing and write
fs.writeFileSync("read.txt","this is file creating  in node js");

// do overwrite file 
fs.writeFileSync("read.txt","this is second file creating  in node js");

// store more data in same file without update other file
fs.appendFileSync('read.txt',"this is my second file for creating node js");


// file read in buffer data
const buf_data = fs.readFileSync("read.txt");

// buffer to convert string
org_data = buf_data.toString()
console.log(org_data);
// node js include an additional data type called buffer (but not available in browser 's javascript) buffer is mainly used to store binary data while reading from a file and receiving packets over the network.
// file rename 
fs.renameSync("read.txt","readwrite.txt");