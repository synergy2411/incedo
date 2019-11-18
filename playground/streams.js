const fs = require("fs");
const http = require("http");
const server = http.createServer((req, res)=>{
    const readStream = fs.createReadStream("./cool.txt");

    // Upload contents
    req.on("data", (data) => {
            req.pipe(fs.createWriteStream("./new-ppt.pptx"));
    })

    // Download contents
    readStream.pipe(res);

})

server.listen(9090, ()=>{ 
    console.log("Server started at Port 9090...");
})



// readStream.on("data", (err, data) => {
//     let chunk = null;
//     if(data){
//         console.log(err, data);
//     }
    
//     // while(null !== (chunk = data.read())){
//     //     console.log(chunk);
//     // }
// })

// const writeStream = fs.createWriteStream("./new-cool.txt");

// readStream.pipe(writeStream);