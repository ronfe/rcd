/**
 * Created by ronfe on 15-7-17.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.end('hello');
});

module.exports = router;