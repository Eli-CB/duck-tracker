const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Database schema for the 'duck-feeds' cluster
const DuckData = new Schema({
        timeOfFeed: {
                type: String,
                required: true,
        },
        foodFed: {
                type: String,
                required: true,
        },
        locationFed: {
                type: String,
                required: true,
        },
        numberOfDucksFed: {
                type: Number,
                required: true,
                min: 1,
                max: 1000,
        },
        amountFedToDucks: {
                type: Number,
                required: true,
                min: 1,
                max: 1000000,
        }
    },
    { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("data", DuckData);