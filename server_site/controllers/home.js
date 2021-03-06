var views = require('co-views');
var render = views("views",{map:{html:'ejs'}});
var displayObj = require('../config.js').titleList;

var contentModel = require('../models/Content.js');
var index = function*(){
	//读取列表 redis
	this.body = yield render('index.html',{displayObj:displayObj});

}




//579610f508cc147f68edafb9
var content = function*(){
	  console.log(this.params)
    var res = yield contentModel.findOne({_id:this.params.id});
		if(!res)
		{
				return;
		}

		var renderObj = {displayObj:displayObj};
		renderObj.title = res.content_name;
		switch (res.is_pic) {
			//image content
			case 1:
				renderObj.img_urls = res.content_list;
				renderObj.contents = null;
				renderObj.magnet = null;
				break;
			//novel content
			case 2:
				renderObj.contents = res.content;
				renderObj.magnet = null;
				renderObj.img_urls = null;
				break;
		  //movie content
			case 3:
				renderObj.magnet = res.magnet;
				if(res.content_list && res.content_list.length>0)
				{
						 renderObj.img_urls = res.content_list;
				}
				if(res.content)
				{
						 renderObj.contents = res.content;
				}
				break;
			default:

		}
		console.log(res);
			console.log(renderObj);
	  this.body = yield render('content.html',renderObj);
}



var list = function*(){
		var current = parseInt(this.params.page || 1);
		current = current > 0 ? current : 1;
		var tag_name = this.params.tag_name;

		//get top 70 data,read from redis
		var res = yield contentModel.find({class_tag:tag_name}).skip(current * 70).limit(70);

		console.log(res);

		if(!Global.count)
		{
				 Global.count = yield contentModel.count({class_tag:tag_name});
		}
		console.log(Global.count);
		//get all the data counts read from redis
		//var count = 1400;
		var page_count = -(~(Global.count/70));

		this.body = yield render('listpage',{
				displayObj:displayObj,//list title data
				list:res,//list data
				tag_name:tag_name,//classify name
				list_count:	Global.count,//total list data count
				page_count:page_count,//render page count
				current_page:current
			});

}





module.exports = {index:index,content:content,list:list};
