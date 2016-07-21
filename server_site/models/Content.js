var mongoose = require('./db.js')


var contentSchema = mongoose.Schema({

	create_date:{type:String},//时间

	class_tag:{type:String},//所属标签

    content_name:{ type: String }, //内容标题

    content_list:{ type:[],default:[]},//图片列表,内容（ url ）

    is_pic:{type:Number,default:false},//是否为图片内容(1:图片2:文字,3:电影)

    content:{type:String},//当时文字内容时，内部存储文字内容

    magnet:{type:String}//当为电影时，存储magnet链接

});


var contentModel = mongoose.model('content',contentSchema,'content');

module.exports = contentModel;
