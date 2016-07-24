var router = require('koa-router')();
var home = require('../controllers/home.js');
module.exports.routes=(app) =>{
	app.use(router.routes());
	router.get('/',home.index);
	router.get('/content/:tag/:id',home.content);
	//router.post('/getlist',home.getlist);
	router.get('/classify/:tag_name',home.list);
	router.get('/:tag_name/page/:page',home.list);
};
