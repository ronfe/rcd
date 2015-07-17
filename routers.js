/**
 * Created by ronfe on 15-7-17.
 */
var express = require('express');
var router = express.Router();
var people = require('./controller/people');
var bodyParser = require('body-parser');

router.get('/', function(req, res){
    res.end('hello');
});

router.post('/people', people.create);
router.get('/people', people.listAll);

module.exports = router;