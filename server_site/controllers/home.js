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
	

	this.body = JSON.stringify({class_tag:this.request.body.id,pagecount:140,data:[{create_date:"2016/7/21",content_name:"test_title_list",id:"579062ae08f2293729f4b2dd"},{create_date:"2016/7/21",content_name:"test_title_list2",id:"579062ae08f2293729f4b2dd"},{create_date:"2016/7/21",content_name:"test_title_list2",id:"579062ae08f2293729f4b2dd"},{create_date:"2016/7/21",content_name:"test_title_list2",id:"579062ae08f2293729f4b2dd"},{create_date:"2016/7/21",content_name:"test_title_list2",id:"579062ae08f2293729f4b2dd"},{create_date:"2016/7/21",content_name:"test_title_list2",id:"579062ae08f2293729f4b2dd"},{create_date:"2016/7/21",content_name:"test_title_list2",id:"579062ae08f2293729f4b2dd"},{create_date:"2016/7/21",content_name:"test_title_list2",id:"579062ae08f2293729f4b2dd"},{create_date:"2016/7/21",content_name:"test_title_list2",id:"579062ae08f2293729f4b2dd"},{create_date:"2016/7/21",content_name:"test_title_list2",id:"579062ae08f2293729f4b2dd"},{create_date:"2016/7/21",content_name:"test_title_list2",id:"579062ae08f2293729f4b2dd"},{create_date:"2016/7/21",content_name:"test_title_list2",id:"579062ae08f2293729f4b2dd"}]});

}

var list = function*(){
		var current = parseInt(this.params.page || 1);
		var tag_name = this.params.tag_name;

		//get top 70 data,read from redis
		var example = [  {title:"测试标题测试标题测试标题测试标题测试标题",create_date:"2016/7/18",id:"579062ae08f2293729f4b2dd"}
										,{title:"测试标题测试标题测试标题测试标题测试标题",create_date:"2016/7/18",id:"579062ae08f2293729f4b2dd"}
										,{title:"测试标题测试标题测试标题测试标题测试标题",create_date:"2016/7/18",id:"579062ae08f2293729f4b2dd"}
										,{title:"测试标题测试标题测试标题测试标题测试标题",create_date:"2016/7/18",id:"579062ae08f2293729f4b2dd"}
										,{title:"测试标题测试标题测试标题测试标题测试标题",create_date:"2016/7/18",id:"579062ae08f2293729f4b2dd"}
										,{title:"测试标题测试标题测试标题测试标题测试标题",create_date:"2016/7/18",id:"579062ae08f2293729f4b2dd"}
										,{title:"测试标题测试标题测试标题测试标题测试标题",create_date:"2016/7/18",id:"579062ae08f2293729f4b2dd"}
										,{title:"测试标题测试标题测试标题测试标题测试标题",create_date:"2016/7/18",id:"579062ae08f2293729f4b2dd"}
										,{title:"测试标题测试标题测试标题测试标题测试标题",create_date:"2016/7/18",id:"579062ae08f2293729f4b2dd"}
										,{title:"测试标题测试标题测试标题测试标题测试标题",create_date:"2016/7/18",id:"579062ae08f2293729f4b2dd"}
										,{title:"测试标题测试标题测试标题测试标题测试标题",create_date:"2016/7/18",id:"579062ae08f2293729f4b2dd"}
										,{title:"测试标题测试标题测试标题测试标题测试标题",create_date:"2016/7/18",id:"579062ae08f2293729f4b2dd"}
										,{title:"测试标题测试标题测试标题测试标题测试标题",create_date:"2016/7/18",id:"579062ae08f2293729f4b2dd"}
										,{title:"测试标题测试标题测试标题测试标题测试标题",create_date:"2016/7/18",id:"579062ae08f2293729f4b2dd"}
										,{title:"测试标题测试标题测试标题测试标题测试标题",create_date:"2016/7/18",id:"579062ae08f2293729f4b2dd"}
										,{title:"测试标题测试标题测试标题测试标题测试标题",create_date:"2016/7/18",id:"579062ae08f2293729f4b2dd"}
									];
		//get all the data counts read from redis
		var count = 1400;
		var page_count = -(~(count/70));

		this.body = yield render('listpage',{
				displayObj:displayObj,//list title data
				list:example,//list data
				tag_name:tag_name,//classify name
				list_count:count,//total list data count
				page_count:page_count,//render page count
				current_page:current
			});

}





module.exports = {index:index,content:content,getlist:getlist,list:list};
