const express = require('express');
const app = express();

app.get('/api',(req, res) => {
    res.json("You are in /api module.")
})

module.exports = app;