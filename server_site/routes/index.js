var router = require('koa-router')();
var home = require('../controllers/home.js');
module.exports.routes=(app) =>{
	app.use(router.routes());
	//index
	router.get('/',home.index);
	//detail
	router.get('/content/:tag/:id',home.content);
	//list
	router.get('/:tag_name',home.list);
	//list
	router.get('/:tag_name/page/:page',home.list);
};
