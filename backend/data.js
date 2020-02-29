const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Database schema for the 'duck-feeds' cluster
const DataSchema = new Schema({
        timeOfFeed: {
                type: String, //Date
                required: [true, 'Please enter the time you fed the ducks.']
        },
        foodFed: {
                type: String,
                required: [true, 'Please enter the food you fed the ducks.']
        },
        locationFed: {
                type: String,
                required: [true, 'Please enter the location you fed the ducks']
        },
        numberOfDucksFed: {
                type: String, //Number
                required: [true, 'Please enter the approximate number of ducks you fed'],
                // min: [1, 'You need to have fed at least one duck to submit data.'],
                // max: [1000, 'There are not this many ducks in the park.']
        },
        amountFedToDucks: {
                type: String, //Number
                required: [true, 'Please enter the approximate amount of food you fed to the ducks in grams'],
                // min: [1, 'You need to have fed at least one gram of food to submit data'],
                // max: [1000000, 'It is impossible to feed the ducks this much. Ensure you are using grams.']

        }
    },
    { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);