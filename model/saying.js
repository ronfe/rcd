/**
 * Created by ronfe on 15-7-17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var sayingSchema = new Schema({
    from: {type: ObjectId, ref: 'People'},
    to: {type: ObjectId, ref: 'People'},
    content: String,
    action: String,
    source: [Number]
}, {collection: 'sayings'});

mongoose.model('Saying', sayingSchema);