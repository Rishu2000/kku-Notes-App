const express = require('express');
const app = express();
const user = require('./user');
const note = require('./note');

app.use('/user',user);
app.use('/note',note);
app.get('/',(req, res) => {
    res.json("You are in /api module.")
})

module.exports = app;