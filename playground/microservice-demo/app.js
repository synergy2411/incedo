const server = require("express")();
const db = require("./db/db-connect");
const axios = require("axios");

server.get("/", (req, res) => {
    // const data = db.connect();
    axios.get("http://localhost:9000/data")
        .then(resp => {
            res.send({ message: resp.data });
        }, err=> {
            console.log(err);
            res.status(404).send({"message" : "ERROR"});
        })
})
    .get("/different", (req, res) => {
        res.send({ message: "Differenet Route" });
    })
    .listen(3000, () => { console.log("Server Started...") })
