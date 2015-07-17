/**
 * Created by ronfe on 15-7-17.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var peopleSchema = new Schema({
    name: String,
    alias: [],
    gender: String,
    desc: [
        {
            content: String,
            source: [{type: Number}],
            relation: {type: ObjectId, rel: 'People'}
        }
    ],
    work: [
        {
            title: String,
            workType: String,
            content: String,
            source: [{type: Number}]
        }
    ],
    group: [{
        type: ObjectId,
        ref: 'Group'
    }]

}, {collection: 'peoples'});

mongoose.model('People', peopleSchema);