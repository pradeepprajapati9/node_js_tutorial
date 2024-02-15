const express=require("express");
const app=express();
const port=2500;
app.get("/",(req,res)=>{
    res.send("home page");
})

app.get("/about",(req,res)=>{
    res.send("about page")
})
app.listen(port,(err)=>{
    console.log("port is running");
})
