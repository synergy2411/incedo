const express = require("express");
const timeout = require("connect-timeout");
const app = express();

app.use("/api", timeout(5000), onHault, (req, res, next) => {
    // doing nothing here will hault
    setTimeout(() => {
        console.log("6 seconds left.")
    }, 6000);
}, (err, req, res, next) => {
    if (err) {
        return res.status(503).send("ERROR")
    }
    next();
}).use((req, res, next) => {
    console.log("M2");
    res.send("Not to execute.")
}).listen(9090, () => console.log("Server started..."))

function onHault(req, res, next) {
    if (!req.timedout) {
        next();
    }
}