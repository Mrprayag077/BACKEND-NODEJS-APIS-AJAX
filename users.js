const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    _id: Number,
    Firstname: String,
    Lastname: String,
    Age: String,
    Hometown: String,
    Job: String,
    ids: String


})

module.exports = mongoose.model("users", userSchema);
