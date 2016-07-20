var views = require('co-views');
var render = views("views",{map:{html:'ejs'}});
var displayObj = require('../config.js');
var index = function*(){
	//读取列表
	this.body = yield render('index.html',{displayObj:displayObj});
	
}

var content = function*(){
	console.log(this.params.tag);//class
	console.log(this.params.id);//id
	this.body = yield render('content.html',{displayObj:displayObj});
}

















module.exports = {index:index,content:content};