// function mystery(){
//     var chooseNumber = function (){
//         return 7;
//     }
//     return chooseNumber();
//     var chooseNumber = function (){
//         return 12;
//     }
// }

// // var nestedFunc = mystery();
// console.log(mystery());          // ?


// function demo(arr){
//     if(arr.length > 2){
//         var load = "LOADING";
//         console.log(flash);             //
//     }else{
//         var flash = "FLASHING"
//     }
// }

// demo([2,3,4,5]);

// Core Modules : FS, Util, OS, Path, Http etc
// const os =require("os");
// console.log("CPU's", os.cpus().length);
// console.log("Total Mem", os.totalmem());
// console.log("Arch :", os.arch());


// const path = require("path");

// const url = "https://www.example.com/public/index.html";

// console.log(path.dirname(url));
// console.log(path.extname(url));
// console.log(path.basename(url));


// const fs = require("fs");

// const contents = fs.readFileSync("./cool.txt");
// console.log("Sync : ", contents.toString());          // ?

// fs.readFile("./cool.txt", (err, data)=>{
//     if(err) {
//         console.log(err);
//     }
//     console.log("Async ", data.toString());               // 
// })

// console.log("Program termintaes");          // ?





// External Modules : npm install <package>

// import {} from '';

// const chalk = require("chalk");

// console.log(chalk.green("Success"))
// console.log(chalk.red("ERROR"))
// console.log(chalk.yellow("Warning"))


// const yargs = require("yargs");
// console.log(process.argv);
// console.log(yargs.argv);





// class Student{

//     constructor(fname, lname){
//         this.fname = fname;
//         this.lname = lname;
//     }
//     getFullName() {
//         return this.fname + " " + this.lname
//     }
// }

// const foo = new Student("Foo", "Bar");
// console.log(foo.getFullName());













// File Module : module.exports

// const {add, MAGIC_NUMBER} = require("./utils/mymodule");

// // console.log(myModule.add(2,4));

// add();



















// Promises

// function demo(){
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             resolve("Here the data comes");
//         }, 3000)
//     })
// }

// async function fn(){
//     // demo().then(response => {
//     //     console.log(response);
//     // })

//     const content = await demo();
//     console.log(content);
// }
// fn()












// node CLI app - functionalities




// Events :

// const EventEmitter= require("events").EventEmitter;
// const stream  = require("stream");

// // console.log(new stream.Stream() instanceof EventEmitter);
// // console.log(new stream.Readable() instanceof stream.Stream );
// // console.log(new stream.Writable() instanceof stream.Stream );
// // console.log(new stream.Duplex() instanceof stream.Stream );

// const emitter = new EventEmitter();

// // emit() : trigger the event
// // on() : register the event handler function

// emitter.on("removeListener",(eventName, listenerFunction) => {
//     console.log(eventName, listenerFunction.name)
// })

// emitter.on("newListener", (eventName, listenerFunction) => {
//     console.log(eventName, listenerFunction.name)
// })

// function handlerFn(event){
//     console.log("Handler function", event.name);
// }


// emitter.on("foo", () => {
//     console.log("Foo Event Fired!");
//     emitter.removeListener("foo", handlerFn);
// })

// emitter.on("foo", handlerFn)

// emitter.on("bar", handlerFn)


// emitter.emit("foo", {name : "foo"});
// emitter.emit("foo", {name : "foo"});
// emitter.emit("bar", {name : "bar"});


// console.log(__filename, __dirname);


// process.on("exit", (code)=>{
//     console.log("Exiting...", code)
// })


// process.on("uncaughtException", () => {
//     console.log(new Error("Something bad haapened!"))
// })

// nonExistingFunction();


// const http = require("http");
// const server = http.createServer( (request, response) => {
//     response.writeHead(200);
//     response.write("Hello Client");
//     response.end();

// });

// server.listen(9090);

// console.log("Http server running on Port 9090")



// node app.js add --title="Grocery" --body="to buy pulses"
// node app.js remove --title="Grocery"
// node app.js read --title="Grocery"
// node app.js list