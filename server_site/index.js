var koa = require('koa');
var views = require('co-views');
var router = require('koa-router')();
var render = views("views",{map:{html:'ejs'}});
var logger = require('koa-logger');
var static = require('koa-static');
var path = require('path');
var routes = require('./routes/index.js').routes;
var app = koa();
var schedule = require("node-schedule");

var date = new Date(2016,7,20,11,08,0);

var j = schedule.scheduleJob(date, function(){

　　console.log("执行任务");

});
app.use(logger());
app.use(static(path.join(__dirname+"/public")));


console.log('loading....');

routes(app);

app.listen(3000);

