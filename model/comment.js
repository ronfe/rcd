/**
 * Created by ronfe on 15-7-17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var commentSchema = new Schema({
    from: {type: ObjectId, ref: 'People'},
    to: {type: ObjectId, ref: 'People'},
    content: String,
    source: [Number]
}, {collection: 'comments'});

mongoose.model('Comment', commentSchema);