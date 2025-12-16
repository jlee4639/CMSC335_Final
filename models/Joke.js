const mongoose = require('mongoose');

const jokeSchema = new mongoose.Schema({
    setup: String,
    punchline: String,
    type: String
});

module.exports = mongoose.model('Joke', jokeSchema);