const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
const api = require('../api/api');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api', api);

app.use((err, req, res, next) => {
    res.status(500).send(err.message);
});

module.exports = app;

