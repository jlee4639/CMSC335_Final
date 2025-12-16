const express = require('express');
const router = express.Router();
const axios = require('axios');

// Route 1: Landing Page
router.get('/', (req, res) => {
    res.render('homepage', { joke: null, error: null });
});

router.get('/get-jokes', async (req, res) => {
    const type = req.query.type || 'random';

    try {
        let url = 'https://official-joke-api.appspot.com/random_joke';

        if (type !== 'random') {
            url = `https://official-joke-api.appspot.com/jokes/${type}/random`;
        }

        const response = await axios.get(url);

        let jokeData = response.data;
        if (Array.isArray(jokeData)) {
            jokeData = jokeData[0];
        }

        res.render('homepage', { joke: jokeData, error: null });

    } catch (err) {
        console.error("API Error:", err);
        res.render('homepage', { joke: null, error: "Failed to fetch a joke. Try again!" });
    }
});

module.exports = router;