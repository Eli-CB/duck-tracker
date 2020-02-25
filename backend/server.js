const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./data');

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

// DB uri string
const dbRoute = 'mongodb+srv://admin:XnvALfhZdv8Ge0MY@duck-feeds-irotb.mongodb.net/test?retryWrites=true&w=majority';

// Makes DB connection
mongoose.connect(dbRoute, { useNewUrlParser: true, useUnifiedTopology: true });
let db = mongoose.connection;
db.once('open', () => console.log('Connected to the DB'));

// Ensures DB connection successful
db.on('error', console.error.bind(console, 'DB connection error:'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// Used to retrieve database data
router.get('/getData', (req, res) => {
    Data.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});

// Used to post data to database from the main form
router.post('/putData', (req, res) => {
    let data = new Data();

    const { timeOfFeed, foodFed, locationFed, numberOfDucksFed, amountFedToDucks } = req.body;

    data.timeOfFeed = timeOfFeed;
    data.foodFed = foodFed;
    data.locationFed = locationFed;
    data.numberOfDucksFed = numberOfDucksFed;
    data.amountFedToDucks = amountFedToDucks;
    data.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));