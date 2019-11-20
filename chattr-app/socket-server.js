const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/public/socket-client.html")
})

io.on("connection", client => {
    console.log("Client connected");
})

server.listen(9090, () => {
    console.log("Socket server started at port : 9090")
})