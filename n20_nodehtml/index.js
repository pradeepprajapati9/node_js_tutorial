const express = require("express");
const app = express();
const port = 3500;

app.get("/", (req, res) => {
    res.send("<h1>html page create</h1>");
})

app.get("/about", (req, res) => {
    res.send("<h1>aobut pages</h1>")
})

app.get("/api", (req, res) => {
    const data = [
        {
            name: "pradeep",
            roll_no: 995326,
            ph_no: 9953183126,
            posistion: "node developer",
            qualification: "bca"
        },
        {
            name: "vikki",
            roll_no: 12546,
            ph_no: 995683251,
            posistion: "react developer",
            qualification: "mca"
        }
    ]

    res.send(data);
})
app.listen(port, (err) => {
    console.log("port is running");
})
