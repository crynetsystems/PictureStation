var koa = require('koa');
var views = require('co-views');
var router = require('koa-router')();
var render = views("views",{map:{html:'ejs'}});
var logger = require('koa-logger');
var static = require('koa-static');
var path = require('path');
var app = koa();

app.use(logger());
app.use(static(path.join(__dirname+"/public")));

router.get('/',function*(next){
	this.body = yield render('index.html',{user:"none"});
	yield next;
});

app.use(router.routes());
app.use(function*(next){
	console.log('hehe')
	yield next;
});
app.listen(3000);