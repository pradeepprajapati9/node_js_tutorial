const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("this is home page");
    } else if (req.url == "/home") {
        res.end("this is home page");
    } else if (req.url == "/about") {
        res.end("this is about page");
    } else if (req.url === "/contact") {
        res.end("this is contact page");
    } else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("<h1>404 page not found</h1>");
    }
})
server.listen(2300, () => {
    console.log("listning to the port number 2300")
})