const EventEmitter = require('events');

const event = new EventEmitter();
event.on("hello",()=>{
    console.log("your name  is pradeep ")
})
event.on("hello",()=>{
    console.log("your name  is riya ")
})
event.on("hello",()=>{
    console.log("your name  is suneel ")
})
event.on("hello",()=>{
    console.log("your name  is kunal ")
})
event.on("hello",()=>{
    console.log("your name  is poonam ")
})
event.on("hello",()=>{
    console.log("your name  is richa ")
})

event.on("checkpage", (sc, msg) => {
    console.log(`your status code is ${sc} and message is ${msg}`);
})
// the emit() function is used to trigger or emit a custom event. It is commonly used in event-driven programming and allows you to define and listen for custom events within your application.
event.emit("checkpage", 200, "ok");