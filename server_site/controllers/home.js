var views = require('co-views');
var render = views("views",{map:{html:'ejs'}});
var displayObj = require('../config.js').titleList;

var contentModel = require('../models/Content.js');
var index = function*(){
	//读取列表 redis
	this.body = yield render('index.html',{displayObj:displayObj});
	
}




//579062ae08f2293729f4b2dd
var content = function*(){
    var res = yield contentModel.findOne({_id:this.params.id});
    console.log(res);
	this.body = yield render('content.html',{displayObj:displayObj});
}

var getlist = function *(){
	//read form redis
	//var res = yield contentModel.find({class_tag:this.request.body.id});
	//console.log(res);
	//console.log(res.content_name)
	//console.log(Parse.json(res));

	this.body = JSON.stringify({class_tag:this.request.body.id,pagecount:140,data:[{create_date:"2016/7/21",content_name:"test_title_list",id:"579062ae08f2293729f4b2dd"},{create_date:"2016/7/21",content_name:"test_title_list2",id:"579062ae08f2293729f4b2dd"},{create_date:"2016/7/21",content_name:"test_title_list2",id:"579062ae08f2293729f4b2dd"},{create_date:"2016/7/21",content_name:"test_title_list2",id:"579062ae08f2293729f4b2dd"},{create_date:"2016/7/21",content_name:"test_title_list2",id:"579062ae08f2293729f4b2dd"},{create_date:"2016/7/21",content_name:"test_title_list2",id:"579062ae08f2293729f4b2dd"},{create_date:"2016/7/21",content_name:"test_title_list2",id:"579062ae08f2293729f4b2dd"},{create_date:"2016/7/21",content_name:"test_title_list2",id:"579062ae08f2293729f4b2dd"},{create_date:"2016/7/21",content_name:"test_title_list2",id:"579062ae08f2293729f4b2dd"},{create_date:"2016/7/21",content_name:"test_title_list2",id:"579062ae08f2293729f4b2dd"},{create_date:"2016/7/21",content_name:"test_title_list2",id:"579062ae08f2293729f4b2dd"},{create_date:"2016/7/21",content_name:"test_title_list2",id:"579062ae08f2293729f4b2dd"}]});

}

















module.exports = {index:index,content:content,getlist:getlist};