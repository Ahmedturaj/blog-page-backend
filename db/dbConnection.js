const mongoose = require('mongoose');

const dotenv = require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("database connected successfully");
    } catch (error) {
        console.error("database connection fail", error);
        process.exit(1);
    }
}

module.exports = connectDB;