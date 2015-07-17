/**
 * Created by ronfe on 15-7-17.
 */
var mongoose = require('mongoose');
var Saying = mongoose.model('Saying');
var _ = require('lodash');

exports.findBySender = function(req, res){
    var sender = req.params.sender;
    var episode = req.params.episode;

    Saying.find({from: sender}, function(err, result){
        if (err){
            res.status(500);
            console.error(err);
        }

        if (episode === 0){
            res.status(200).json(result);
        }
        else {
            var filterRes = _.filter(result, function(n){
                return n[0] === episode;
            });
            res.status(200).json(filterRes);

        }
    });
};

exports.findByRelationship = function(req, res){
    var episode = req.params.episode;
    var sender = req.params.sender;
    var receiver = req.params.receiver;

    Saying.find({from: sender, to: receiver}, function(err, result){
        if (err) {
            res.status(500);
            console.error(err);
        }

        if (episode === 0){
            res.status(200).json(result);
        }
        else {
            var filterRes = _.filter(result, function(n){
                return n[0] === episode;
            });
            res.status(200).json(filterRes);
        }
    });
};