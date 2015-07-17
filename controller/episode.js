/**
 * Created by ronfe on 15-7-17.
 */
var mongoose = require('mongoose');
var Episode = mongoose.model('Episode');

exports.listAll = function (req, res) {
    Episode.find({}, function (err, ppList) {
        if (err) {
            res.status(500);
            console.error(err);
        }
        res.status(200).json(ppList);
    });
};

exports.create = function (req, res) {
    var data = req.body;
    var episode = new Episode(data);
    episode.save(function (err, people) {
        if (err) {
            res.status(500);
            console.error(err);
        }
        res.send('succeeded');
    });
};

exports.findById = function (req, res) {
    var pId = req.params.id;
    Episode.findOne({_id: pId}, function (err, result) {
        if (err) {
            res.status(500);
            console.error(err);
        }
        res.status(200).json(result);
    });
};

exports.findByOrder = function (req, res) {
    var order = req.params.order;
    Episode.findOne({order: order}, function (err, result) {
        if (err) {
            res.status(500);
            console.error(err);
        }
        res.status(200).json(result);
    });
};