const express = require("express");
const cookieSession = require("cookie-session");
const app = express();

app.use(cookieSession({
    keys: ["MY_SECRET_KEY"]
}))
    .use("/home", (req, res) => {
        if(req.session.views){
            req.session.views++;
            return res.send("You have visited this page " + req.session.views + "times!")
        }else{
            req.session.views = 1;
            return res.send("You have visited this page " + req.session.views + "time!")
        }
        
    })
    .use("/reset", (req, res) => {
        delete req.session.views;
        res.send("Cleared the view.")
    })
    .listen(9090, () => {
        console.log("Express started....")
    })
