let express = require("express")
const app = express();
let port = 3000;
app.get("/", (req, res) => {
    res.send("welcome to express");
});

app.listen(port, () => {
    console.log("lishting to the port no", port);
});   