const fs = require('fs');
const Data = require('http');
const server = Data.createServer((req, res) => {
    const data = fs.readFileSync(`${__dirname}/createapi/simpleapi.json`, "utf-8")

    //  json to object convert
    const obj = JSON.parse(data)
    if (req.url == "/") {
        res.end("this is home page");
    } else if (req.url == "/about") {
        res.end("this is about page");
    } else if (req.url == "/contact") {
        res.end("this is contact page");
    } else if (req.url == "/userapi") {
        res.writeHead(200, { "content-type": "application/json" });
        res.write(JSON.stringify(obj))
        res.end()
    }
    else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("<h1>404 page not found</h1>");
    }
})
server.listen(3200, () => {
    console.log("listning to the port number 3200")
});