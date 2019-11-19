const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json({
    type : "*/*"
}));

app.get("/", (req, res)=>{
    // res.send("<h1>Some cool heading</h1>")
    res.sendFile(__dirname+"/public/index.html");
    // res.send({
    //     status : "done"
    // })
})

app.get("/login", (req, res)=>{
    if(req.query.username && req.query.password ){
        console.log("Username : ", req.query.username)
        console.log("Password : ", req.query.password)
        return res.send({"status" : "success"})
    }
    res.redirect("/");
})

app.post("/login", (req, res) => {
    if(req.body){
        console.log(req.body)
        // console.log("Username : ", req.body.username)
        // console.log("Password : ", req.body.password)
        return res.send({"status" : "success"})
    }
    res.redirect("/");
})

app.listen(9090, () => {
    console.log("Server started....")
})