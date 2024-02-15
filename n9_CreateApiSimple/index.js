const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead("200", { "content-type": "application/json" });
    res.write(JSON.stringify({
        name: "pradeep",
        ph_no: 9953183126,
        roll: 2563,
        employe: "node developer"
    }))
    res.end();
})
server.listen("2500", () => {
    console.log("port number start");
})