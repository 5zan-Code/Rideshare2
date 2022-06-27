const express = require('express');
const app = express();
const authRoute = require('./auth.route');
const carRoute = require('./car.route');

app.use('/',authRoute);
app.use('/cars',carRoute);

module.exports = app;