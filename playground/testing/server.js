const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan")

app.use(morgan("tiny"))

app.use(bodyParser.json());

app
    .get("/", (_, res) => {
        res.send("Hello World");
    })
    .get("/users", (_, res) => {
        res.status(200).send({ "username": "foo" })
    })
    .post("/users", (req, res) => {
        if (req.body) {
            console.log(req.body);
            return res.status(200).send(req.body)
        }
        res.send({"status" : "ERROR"})

    })
    .listen(3000, () => { console.log("Server started") })