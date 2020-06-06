const mongoose = require('mongoose');
const keys = require('../config/keys');

mongoose.connect(keys.mongoURI,{dbName:'tazwiz'});
mongoose.connection.on('connected',() => {
    console.log('connected');
});
mongoose.connection.on("error", err => {
    console.log('disconnected');
});

require('./userSchema');
require('./productSchema');
require('./customerSchema');