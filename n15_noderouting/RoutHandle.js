const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url == "/") {
        res.end("hellow I Am Pradeep Full Stack Developer");
    } else if (req.url == "/about") {
        res.end("This Is About Page");
    } else if (req.url == "/contact") {
        res.end("This is Contact Page");
    }else{
        res.writeHead(404)// for using routing errors 
        res.end('Here is no Page Found 404 ')
    }

}).listen(3000, () => {
    console.log("this is port number runing 3000");
})