/**
 * Created by ronfe on 15-7-17.
 */

var express = require('express');
var mongoose = require('mongoose');
var fs = require('fs');
var bodyParser = require('body-parser');

var dbUrl = 'mongodb://localhost:27017/rcd';
var dbConn = mongoose.connect(dbUrl);

mongoose.connection.on('connected', function () {
    console.log('db connected!');

    fs.readdirSync(__dirname + '/model').forEach(function (file) {
        if (~file.indexOf('.js')) {
            var filePath = __dirname + '/model/' + file;
            require(filePath);
        }
    });
    var app = express();
    var router = require('./routers');
    app.use(bodyParser.json());
    app.use('/', router);
    app.listen(1111);
    console.log('The app is listening at port 1111');

});