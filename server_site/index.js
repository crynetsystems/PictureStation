var koa = require('koa');
var logger = require('koa-logger');
var static = require('koa-static');
var path = require('path');
process.on('uncaughtException',()=>{
	
})
//var routes = require('./routes/index.js').routes;
var app = koa();

var schedule = require("node-schedule");

var rule = new schedule.RecurrenceRule();

rule.dayOfWeek = [0, new schedule.Range(1, 6)];
console.log(rule.dayOfWeek);
rule.hour = 9;

rule.minute = 55;

var j = schedule.scheduleJob(rule, function(){

　　console.log("执行任务");

});

app.use(logger());
app.use(static(path.join(__dirname+"/public")));
app.use(function*(){
	try{
		throw new Error('test error occur')
		yield next;
	}catch(e){
		console.log(e);
	}
});

console.log('loading....');

//routes(app);



app.listen(3000);
