/**
 * Created by ronfe on 15-7-17.
 */
var express = require('express');
var router = express.Router();
var people = require('./controller/people');
var episode = require('./controller/episode');
var paragraph = require('./controller/paragraph');
var comment = require('./controller/comment');

router.get('/', function (req, res) {
    res.end('hello');
});

//API of people
router.post('/people', people.create);
router.get('/people', people.listAll);
router.get('/people/:id', people.findOne);
router.get('/people/name/:name', people.findByName);
router.post('/people/desc/:id', people.updateDesc);
router.post('/people/alias/:id/:newName', people.updateAlias);

//API of episode
router.post('/episode', episode.create);
router.put('/episode/length/:order/:newLen', episode.updateLength);
router.get('/episode', episode.listAll);
router.get('/episode/:id', episode.findById);
router.get('/episode/order/:order', episode.findByOrder);

//API of parapraph
router.post('/paragraph', paragraph.create);
router.get('/paragraph/one/:episode/:para', paragraph.findByEpisodeAndPara);
router.get('/paragraph/all/:episode', paragraph.findByEpisode);

//API of comment
router.post('/comment', comment.create);
router.get('/comment/receive/:pid', comment.findByReceiver);
router.get('/comment/bidirection/:sender/:receiver', comment.findByRelationship);

module.exports = router;