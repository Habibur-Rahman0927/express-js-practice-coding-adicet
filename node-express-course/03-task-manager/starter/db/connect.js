// mOJFz2FBx9DWFdSM
/* const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://<username>:<password>@cluster0.zkkoe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
}); */
const mongoose = require('mongoose');

const connectionString = "mongodb+srv://john:1234@cluster0.zkkoe.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority"
const connectDB = (url) => {
    return mongoose.connect(connectionString, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true })
}
module.exports = connectDB