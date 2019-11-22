const app = require("express")();

app.get("/data", (req, res)=>{
    // res.send({ "username": "foo", "age": 32 })
    // process.exit(1);
    throw new Error("Something bad happened");
})

app.listen(9000, () => {console.log("DB Server started...")});

// const connect = () => {
//     let config = {};
//     if (config.hasURI) {
//         console.log("Server started");
//         return { "username": "foo", "age": 32 }
//     }
//     process.exit(1);
    
// }

// module.exports = {
//     connect
// }