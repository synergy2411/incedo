const mongoose = require("mongoose");
const Validator = require("validator");

mongoose.connect("mongodb://localhost:27017/incedo_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(response => {
        console.log("Mongoose Connected");
        // const stock = new Stocks({title : "Apple", price : 800});
        const stock = new Stocks({ title: "sony", price: 300, email: "abc" });
        stock.save().then(value => {
            console.log("SAVED", value);
        }, err => {
            console.log(err);
        })
    }, err => {
        console.log(err);
        process.exit(1);
    })

const stockSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 200,
        validate: {
            validator: (value) => {
                if (value < 200) {
                    throw new Error("TOO LESS AMOUNT")
                }
            }
        }
    },
    email: {
        type: String,
        default: "test@test.com",
        validate: {
            validator: (value) => {
                if (!Validator.isEmail(value)) {
                    throw new Error("NOT EMAIL FORMAT")
                }
            }
        }
    }
})

const Stocks = mongoose.model("Stocks", stockSchema);