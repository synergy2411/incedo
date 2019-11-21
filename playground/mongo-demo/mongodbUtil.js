const { MongoClient } = require("mongodb");
let _db;

MongoClient.connect("mongodb://localhost:27017", {
    useUnifiedTopology: true
}, (err, mongo) => {
    if (err) {
        consolelog(err);
        process.exit(1);
    }
    console.log("Mongo Connected!");
    _db = mongo.db("incedo_db");
    // insertDoc({"username" : "foo1", "password" : "bar1"})
    // findDoc({"username" : "foo1"})
    // deleteDoc({"username" : "foo1"})
    updateDoc();
})

const insertDoc = doc => {
    _db.collection("users").insertOne(doc, (err, result) => {
        if (err) throw new Error(err);
        console.log("INSERTED", result);
    })
}

const findDoc = doc =>{
    _db.collection("users").findOne(doc, (err, result)=>{
        if (err) throw new Error(err);
        console.log("FOUND : ");
    })
}

const deleteDoc = doc => {
    _db.collection("users").deleteOne(doc, (err, result)=>{
        if (err) throw new Error(err);
        console.log("DELETED", result);
    })
}

const updateDoc = () => {
    _db.collection("users").updateOne({username : "Foo"}, {
        $set : {password : "newpassword"}
    },(err, result) => {
        if (err) throw new Error(err);
        console.log("[UPDATED]");
    })
}