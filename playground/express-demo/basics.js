const express = require("express");
const app = express();

app.use("/", (req, res, next) => {
    console.log("Loggin Request Method: ", req.method );
    next()
})
app.use((req, res, next)=>{
    let rnd = Math.random();
    if( rnd > 0.5){
        console.log(rnd);
        return res.send("M2 : Hello from Express!!");
    }
    next();
})
app.use((req, res, next)=>{
    console.log("After sending Response...")
    res.send("M3 : Hello from Express!!");
})

app.listen(9090, () => {
    console.log("Express running on port 9090...");
})