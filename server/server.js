const express = require('express');
const app = express();
const morgan = require('morgan');
const session = require('express-session');
const api = require('./routes/api')
const port = 3002;

app.use(morgan("dev"));
app.use(express.json());
app.use(session({
    secret: 'corona',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use('/api',api);

app.get('/', (req, res) => {
    res.json('Server has started.');
})

app.listen(port, () => {
    console.log("server listening on port " + port);
});