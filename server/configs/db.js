const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => console.log("database connected"))

        await mongoose.connect(`${process.env.MONGODB_URI}/grocer`)
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = connectDB;