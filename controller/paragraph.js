/**
 * Created by ronfe on 15-7-17.
 */
var mongoose = require('mongoose');
var Paragraph = mongoose.model('Paragraph');
var Episode = mongoose.model('Episode');

exports.create = function(req, res){
    var data = req.body;
    var paragraph = new Paragraph(data);
    paragraph.save(function(err){
        if (err){
            res.status(500);
            console.error(err);
        }
        Episode.findOne({order: paragraph.episode}, function(err, result){
            if (err){
                res.status(500);
                console.error(err);
            }
            if (result.length < paragraph.position){
                Episode.update({order: paragraph.episode}, {length: paragraph.position}, function(err){
                    if (err){
                        res.status(500);
                        console.error(err);
                    }
                    res.send('succeeded');
                });
            }
        });
    });
};


exports.findByEpisodeAndPara = function(req, res){
    var episode = req.params.episode;
    var position = req.params.para;

    Paragraph.findOne({episode: episode, position: position}, function(err, result){
        if (err) {
            res.status(500);
            console.error(err);
        }
        res.status(200).json(result);
    });
};

exports.findByEpisode = function(req, res){
    var episode = req.params.episode;

    Paragraph.find({episode: episode}, function(err, result){
        if (err){
            res.status(500);
            console.error(err);
        }
        res.status(200).json(result);
    });
};