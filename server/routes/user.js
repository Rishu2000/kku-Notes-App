const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.json("You are in /api/user module.")
})

module.exports = app;