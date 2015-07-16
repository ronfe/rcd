/**
 * Created by ronfe on 15-7-17.
 */

var express = require('express');
var mongoose = require('mongoose');

var router = require('./routers');

var dbUrl = 'mongodb://localhost:27017/rcd';
var dbConn = mongoose.createConnection(dbUrl);

dbConn.on('connected', function () {
    console.log('db connected!');
    var app = express();
    app.use('/', router);
    app.listen(1111);
    console.log('The app is listening at port 1111');

});