/**
 * Created by ronfe on 15-7-17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var episodeSchema = new Schema({
    order: Number,
    title: String,
    length: {type: Number, default: 0}
}, {collection: 'episodes'});

mongoose.model('Episode', episodeSchema);

