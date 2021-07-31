const express = require('express');
const app = express();
const user = require('./user');

app.use('/api',user);
app.get('/api',(req, res) => {
    res.json("You are in /api module.")
})

module.exports = app;