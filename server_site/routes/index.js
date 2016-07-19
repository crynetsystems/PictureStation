var views = require('co-views');
var render = views("views",{map:{html:'ejs'}});
var router = require('koa-router')();
var displayObj = require('../config.js');
module.exports.routes=(app) =>{
	
	app.use(router.routes());
	router.get('/',function*(){
		
	
	
	//读取列表
	
	this.body = yield render('index.html',{displayObj:displayObj});

	
	console.log('hehe1')
});
};