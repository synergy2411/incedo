const yargs = require("yargs");

yargs.command({
    command : "add",
    description : "To add new note",
    builder : {
        title : {
            type : "string",
            demandOptions : true,
            description : "title to add new Note"
        },
        body : {
            type : "string",
            demandOptions : true,
            description : "body to add new Note"
        }
    },
    handler : (argv) =>{
        console.log("Arguments : ", argv)
    }
})


yargs.parse();