const express = require("express");
const session  = require("express-session");
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy;
const bodyParser = require("body-parser");;
const app = express();

const USER = {username : "foo", password : "bar", id : 123};

app.use(session({secret : "SECRET_KEY", resave : true, saveUninitialized : true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended : false}));

// storing info to maintain the session
passport.serializeUser((user, cb) =>{       
    cb(null, USER.id);
})         

// accessing user by stored id to maintain the session
passport.deserializeUser((id,cb) => {
    cb(null, {username : USER.username, password : USER.password });        
})

passport.use(new LocalStrategy((username, password, done)=>{
    // make DB call to authenticate the user
    if(username === USER.username && password === USER.password){
        done (null, {username, password});
    }else{
        done (null, false);
    }
}))

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/login", passport.authenticate("local", {
    failureRedirect : "/"
}, (req, res, next)=> {
    console.log(req.user);
})

app.get("/profile", (req, res)=>{
    // res.send("USER AUTHORIZED.")
    res.sendFile(__dirname+"/public/profile.html");
})

app.get("/logout", (req, res)=>{
    req.logOut();
    res.redirect("/");
})
app.listen(9090, () => {console.log("Server started...")})