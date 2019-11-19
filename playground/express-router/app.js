const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

let todos = [];

router.route("/")
    .get((req, res) => {
        res.status(200).send({
            items : todos
        })
    })
    .post((req, res) => {
        if (req.body) {
            todos.push(req.body);
            return res.status(200).send({
                status: "UPDATED",
                itemId: todos.length - 1
            })
        }

    })
    .put((req, res) => {
        todos = [];
        if (req.body) {
            todos.push(req.body);
            res.status(200).send({
                status: "REPLACED",
                items: todos
            })
        }

    })
    .delete((req, res) => {
        todos = [];
        res.status(200).send({
            status: "DELETED",
            items: todos
        })
    })

router.route("/:id")
    .get((req, res)=>{
        const id = req.params['id'];
        if(id && todos[Number(id)]){
            return res.status(200).send({
                status : "FOUND",
                item : todos[Number(id)]
            })
        }
        res.status(401).send({status : "NOT FOUND"})
    })
    .all((req, res) => {
        res.status(501).send({status : "NOT IMPLEMENTED"})
    })

    // module.exports = {router};
app.use("/", router);
app.listen(9090, () => {
    console.log("Server started....")
})