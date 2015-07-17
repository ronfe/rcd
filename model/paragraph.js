/**
 * Created by ronfe on 15-7-17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var paragraphSchema = new Schema({
    episode: Number,
    position: Number,
    text: String,
    epilogue: String
}, {collection: 'paragraphs'});

mongoose.model('Paragraph', paragraphSchema);