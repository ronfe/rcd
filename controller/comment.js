/**
 * Created by ronfe on 15-7-17.
 */
var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');

exports.create = function(req, res){
    var data = req.body;
    var comment = new Comment(data);

    comment.save(function(err){
        if (err){
            res.status(500);
            console.error(err);
        }
        res.send('succeeded');
    });
};

exports.findByReceiver = function(req,res){
    var receiver = req.params.pid;
    Comment.find({to: receiver}, function(err, result){
        if (err){
            res.status(500);
            console.error(err);
        }
        res.status(200).json(result);
    });
};

exports.findByRelationship = function(req, res){
    var sender = req.params.sender;
    var receiver = req.params.receiver;

    Comment.find({from: sender, to: receiver}, function(err, result){
        if (err){
            res.status(500);
            console.error(err);
        }
        res.status(200).json(result);
    });
};