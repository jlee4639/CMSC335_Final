const express = require('express');
const router = express.Router();
const Joke = require('../models/Joke'); 

router.post('/save', async (req, res) => {
    try {
        const { setup, punchline, type } = req.body;

        await Joke.create({
            setup: setup,
            punchline: punchline,
            type: type
        });
    
        res.redirect('/db/favorites');

    } catch (err) {
        console.error(err);
        res.send("Error saving to database.");
    }
});

router.get('/favorites', async (req, res) => {
    try {
        const allJokes = await Joke.find();

        res.render('user_jokes', { jokes: allJokes });
    } catch (err) {
        console.error(err);
        res.send("Error retrieving from database.");
    }
});

router.post('/clear', async (req, res) => {
    await Joke.deleteMany({});
    res.redirect('/db/favorites');
});

module.exports = router;