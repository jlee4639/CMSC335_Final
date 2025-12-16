// imports
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const portNum = 8080;

const uri = process.env.MONGO_CONNECTION_STRING;

mongoose.connect(uri);

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

const apiRoutes = require('./routes/apiRoutes');
const dbRoutes = require('./routes/dbRoutes');

app.use('/', apiRoutes);

app.use('/db', dbRoutes);


app.listen(portNum, () => {
    console.log(`Server running on http://localhost:${portNum}`);
});