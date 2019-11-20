const express = require("express");
const hbs = require("hbs");

const app = express();


const viewsPath = __dirname+"/template/views";
const partialPath = __dirname+"/template/partials";

app.set("view engine", "hbs")
app.set("views", viewsPath);
hbs.registerPartials(partialPath);

app.get("/", (req, res)=>{
    res.render("index",{
        username : "Foo",
        age : 32
    })
})

app.get("/about", (req, res)=>{
    res.render("about");
})


app.listen(9090, () =>{console.log("Server started....")});