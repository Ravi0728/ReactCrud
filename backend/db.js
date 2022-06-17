const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/inotebook"

//connectToMongo is inbuilt function for connections
const connectToMongo = () =>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connection to Mongodb Succesfully")
    })
}

module.exports = connectToMongo;