const http=require("http");
const fs=require("fs");
const data =require("./data");

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"application/json"});
    res.write(JSON.stringify(data));
    res.end();
})
server.listen("3500",()=>{
    console.log("server is running");
})