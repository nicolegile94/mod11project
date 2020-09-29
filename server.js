const express = require('express');
const app = express();
const { notes } = require('./db/db');

app.get('/api/notes', (req, res) => {
    let results = notes;
    console.log(req.query)
    res.json(results);
});

app.listen(3001, () => {
    console.log(`API server is not on port 3001`);
});