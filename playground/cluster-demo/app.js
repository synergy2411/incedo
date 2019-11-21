// const cluster = require("cluster");
// const numOfCPU = require("os").cpus().length;
// const http = require("http");

// if (cluster.isMaster) {
//     for (let i = 0; i < numOfCPU; i++) {
//         cluster.fork();
//     }
//     cluster.on("exit", (worker, signal, code) => {
//         console.log("PID :" + worker.process.pid);
//     })
// } else {
//     console.log("Worker started!");
//     http.createServer((req, res) => {
//         res.end("Worker : " + cluster.worker.process.pid);
//     })
//         .listen(9090, () => { console.log("Server started...") })
// }


// const fork = require("child_process").fork;

// const worker = fork(__dirname + "/worker.js");

// worker.send("Hello Message");

// worker.on("message", msg => {
//     console.log("ECHO : ", msg);
// })


// const exec = require("child_process").exec;

// exec("mkdir ", (err, stdout, stderr)=>{
//     if(err) throw new Error(err)
//     console.log("STDOUT : ", stdout);
// } )