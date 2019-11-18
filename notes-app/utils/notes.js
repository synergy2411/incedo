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
    fs.writeFileSync("./notes.json", JSON.stringify(notes));
    console.log(chalk.green("SUCCESS"))
}

const add = (title, body) => {
    const allNotes = loadNotes();
    const duplicatedArray = allNotes.filter(note => note.title === title)
    if (duplicatedArray.length > 0) {
        return console.log(chalk.red("Dupllicate Title. Try Again!"))
    }
    allNotes.push({ title, body });
    saveNotes(allNotes);
}
const read = title => {
    const allNotes = loadNotes();
    const duplicatedArray = allNotes.filter(note => note.title === title)
    console.log(chalk.grey("TItle : ", duplicatedArray[0].title))
    console.log(chalk.grey("Body : ", duplicatedArray[0].body))
}
const remove = title => {
    const allNotes = loadNotes();
    const duplicatedArray = allNotes.filter(note => note.title !== title);
    saveNotes(duplicatedArray);
}
const list = () => {
    loadNotes().forEach(note => {
        console.log(chalk.grey("________________________________"))
        console.log(chalk.grey("TItle : ", note.title))
        console.log(chalk.grey("Body : ", note.body))
    })
}

module.exports = {
    add, read, remove, list
}