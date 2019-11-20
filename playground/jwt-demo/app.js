const app = require("express")();
const jwt = require("jsonwebtoken");

const SECRET_KEY = "my_super_secret_key";
const user = {id : 123};

app.get("/api", (req, res)=>{
    res.send({status : "OPEN_API"})
})
app.get("/login", (req, res)=>{
    
    const token = jwt.sign(user, SECRET_KEY);
    res.send({
        status : "LOGGED_IN",
        token : token
    })
})

const ensureToken = (req, res, next) => {
    const bearerToken = req.headers['authorization'];
    if(bearerToken !== undefined){
        const tokenArray = bearerToken.split(" ");
        const token = tokenArray[1];
        req.token = token;
        next();
    }else{
        res.send({
            status : "TOKEN_NOT_AVAILABLE"
        })
    }
}
app.get("/api/protected", ensureToken, (req, res)=>{

    jwt.verify(req.token, SECRET_KEY, (err, decode)=>{
        if(err){
            return res.send({status : "UNAUTHORIZED"})
        }
        if(decode.id){
            return res.send({
                status : "AUTHORIZED"
            })
        }
    })
})

app.listen(9090, ()=>{console.log("Server started")})