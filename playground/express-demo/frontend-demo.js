const express = require("express");
const app = express();

app.use(express.static(__dirname+"/public"));

app.get("/", (req, res)=>{
    // res.send("<h1>Some cool heading</h1>")
    res.sendFile(__dirname+"/public/index.html");
    // res.send({
    //     status : "done"
    // })
})

app.listen(9090, () => {
    console.log("Server started....")
})