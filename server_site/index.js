var koa = require('koa');
var views = require('co-views');
var router = require('koa-router')();
var render = views("views",{map:{html:'ejs'}});
var logger = require('koa-logger');
var static = require('koa-static');
var path = require('path');
var routes = require('./routes/index.js').routes;
var app = koa();

app.use(logger());
app.use(static(path.join(__dirname+"/public")));


console.log('loading....');

routes(app);


app.use(function*(){

	console.log('hehe')
	
});
app.listen(3000);

