const mongoose = require('mongoose');

const connectDB = async () => {
   
        mongoose.connect("mongodb://localhost:27017/studentDB")
        .then(() => {
            console.log("MongoDB connected");
        })
        .catch((err) => {
            console.log("Error connecting to MongoDB", err);
        });

};

module.exports = connectDB;