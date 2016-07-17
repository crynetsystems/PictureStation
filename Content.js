var mongoose = require('mongoose');

var contentSchema = mongoose.Schema({

    content_name:{ type: String }, //内容标题

    content_list:{ type:[],default:[]},//图片列表,内容（ url ）

    is_pic:{type:Boolean,default:false},//是否为图片内容(true:是，false:文字内容)

    content:{type:String}//当时文字内容时，内部存储文字内容

});


var contentModel = mongoose.model('content',contentSchema,'content');

module.exports = contentModel;
