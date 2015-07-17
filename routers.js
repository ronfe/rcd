/**
 * Created by ronfe on 15-7-17.
 */
var express = require('express');
var router = express.Router();
var people = require('./controller/people');

router.get('/', function (req, res) {
    res.end('hello');
});

router.post('/people', people.create);
router.get('/people', people.listAll);
router.get('/people/:id', people.findOne);
router.get('/people/name/:name', people.findByName);

module.exports = router;