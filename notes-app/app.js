const yargs = require("yargs");
const {add, read, remove, list} = require("./utils/notes");

// CREATE
yargs.command({
    command : "add",
    description : "To add new note",
    builder : {
        title : {
            type : "string",
            demandOption : true,
            description : "title to add new Note"
        },
        body : {
            type : "string",
            demandOption : true,
            description : "body to add new Note"
        }
    },
    handler : argv =>{
        // console.log("ADD Arguments : ", argv)
        add(argv.title, argv.body);
    }
})
// READ
yargs.command({
    command : "read",
    description : "To read a note",
    builder : {
        title : {
            type : "string",
            demandOptions : true,
            description : "title to add new Note"
        }
    },
    handler : argv =>{
        // console.log("READ Arguments : ", argv)
        read(argv.title);
    }
})
// LIST
yargs.command({
    command : "list",
    description : "To list all notes",
    handler : argv =>{
        // console.log("LIST Arguments : ", argv)
        list()
    }
})
// DELETE
yargs.command({
    command : "remove",
    description : "To read a note",
    builder : {
        title : {
            type : "string",
            demandOptions : true,
            description : "title to add new Note"
        }
    },
    handler : argv =>{
        // console.log("REMOVE Arguments : ", argv)
        remove(argv.title);
    }
})

yargs.parse();