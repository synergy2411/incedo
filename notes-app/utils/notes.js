const fs = require("fs");
const chalk = require("chalk");

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("./notes.json");
        const dataString = dataBuffer.toString();
        return JSON.parse(dataString)
    }
    catch (e) {
        return [];
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync("./notes.json",JSON.stringify(notes));
    console.log(chalk.green("SUCCESS"))
}

const add = (title, body) => {
    const allNotes = loadNotes();
    allNotes.push({ title, body });
    saveNotes(allNotes);
}
const read = title => {
    // to read a note from json file based upon the title
}
const remove = title => {
    // to remove a note from json file based upon the title
}
const list = () => {
    // to list down all available notes
}

module.exports = {
    add, read, remove, list
}