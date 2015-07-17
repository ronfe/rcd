/**
 * Created by ronfe on 15-7-17.
 */
var mongoose = require('mongoose');
var People = mongoose.model('People');

exports.listAll = function (req, res) {
    People.find({}, function (err, ppList) {
        if (err) {
            res.status(500);
            console.error(err);
        }
        res.status(200).json(ppList);
    });
};

exports.create = function (req, res) {
    var data = req.body;
    var people = new People(data);
    people.save(function (err, people) {
        if (err) {
            res.status(500);
            console.error(err);
        }
        res.send('succeeded');
    });
};

exports.updateDesc = function(req, res){
    var data = req.body;
    var pid = req.params.id;

    People.findOneAndUpdate({_id: pid}, {$push: {desc: data}}, function(err){
        if (err){
            res.status(500);
            console.error(err);
        }
        res.send('succeeded');
    });
};

exports.updateAlias = function(req, res){
    var data = req.params.newName;
    var pid = req.params.id;

    People.findOneAndUpdate({_id: pid}, {$push: {alias: data}}, function(err){
        if (err){
            res.status(500);
            console.error(err);
        }
        res.send('succeeded');
    });
};

exports.findOne = function (req, res) {
    pId = req.params.id;
    People.findOne({_id: pId}, function (err, result) {
        if (err) {
            res.status(500);
            console.error(err);
        }
        res.status(200).json(result);
    });
};

exports.findByName = function (req, res) {
    searchName = req.params.name;
    People.findOne({name: searchName}, function (err, result) {
        if (err) {
            res.status(500);
            console.error(err);
        }

        res.status(200).json(result);

    });
};