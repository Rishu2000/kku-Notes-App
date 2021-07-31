const express = require('express');
const app = express();
const user = require('./user');

app.use('/user',user);
app.get('/',(req, res) => {
    res.json("You are in /api module.")
})

module.exports = app;