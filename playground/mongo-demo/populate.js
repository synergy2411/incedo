const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/incedo_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(response => {
       console.log("Connected");

    }, err => {
        console.log(err);
        process.exit(1);
    })


const Publisher = mongoose.model("Publisher", new mongoose.Schema({
    companyName : String,
    firstParty : Boolean
}))

const Game = mongoose.model("Game", new mongoose.Schema({
    title : String,
    publisher : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Publisher'
    }
}))

async function createPublisher(companyName, firstParty, website) {
    const publisher = new Publisher({
        companyName,
        firstParty,
        website
    });
 
    const result = await publisher.save();
    console.log(result);
}
 
async function createGame(title, publisher) {
    const game = new Game({
        title,
        publisher
    });
 
    const result = await game.save();
    console.log(result);
}


async function listGames() {
    const games = await Game
        .find()
        .populate('publisher', 'companyName -_id')
        .select('title publisher');
    console.log(games);
}
 
// createPublisher('Nintendo', true, 'https://www.nintendo.com/');
	
// createGame('Super Smash Bros', '5dd661bfa4a251509416d714')

listGames();