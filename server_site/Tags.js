var mongoose = require('mongoose');

var tagSchema = mongoose.Schema({

    tag_name:{ type: String }, //图片类别名

    tag_content:{ type:[],default:[]}//图片列表

});


var tagModel = mongoose.model('tag',tagSchema,'tags');

module.exports = tagModel;
