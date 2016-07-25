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
		var tag_name = this.params.tag_name;

		//get top 70 data,read from redis
		var example = [  {title:"测试标题测试标题测试标题测试标题测试标题",create_date:"2016/7/18",id:"579610f508cc147f68edafb9"}
										,{title:"测试标题测试标题测试标题测试标题测试标题",create_date:"2016/7/18",id:"579610f508cc147f68edafb9"}
										,{title:"测试标题测试标题测试标题测试标题测试标题",create_date:"2016/7/18",id:"579610f508cc147f68edafb9"}
										,{title:"测试标题测试标题测试标题测试标题测试标题",create_date:"2016/7/18",id:"579610f508cc147f68edafb9"}
										,{title:"测试标题测试标题测试标题测试标题测试标题",create_date:"2016/7/18",id:"579610f508cc147f68edafb9"}
										,{title:"测试标题测试标题测试标题测试标题测试标题",create_date:"2016/7/18",id:"579610f508cc147f68edafb9"}
										,{title:"测试标题测试标题测试标题测试标题测试标题",create_date:"2016/7/18",id:"579610f508cc147f68edafb9"}
										,{title:"测试标题测试标题测试标题测试标题测试标题",create_date:"2016/7/18",id:"579610f508cc147f68edafb9"}
										,{title:"测试标题测试标题测试标题测试标题测试标题",create_date:"2016/7/18",id:"579610f508cc147f68edafb9"}
										,{title:"测试标题测试标题测试标题测试标题测试标题",create_date:"2016/7/18",id:"579610f508cc147f68edafb9"}
										,{title:"测试标题测试标题测试标题测试标题测试标题",create_date:"2016/7/18",id:"579610f508cc147f68edafb9"}
										,{title:"测试标题测试标题测试标题测试标题测试标题",create_date:"2016/7/18",id:"579610f508cc147f68edafb9"}
										,{title:"测试标题测试标题测试标题测试标题测试标题",create_date:"2016/7/18",id:"579610f508cc147f68edafb9"}
										,{title:"测试标题测试标题测试标题测试标题测试标题",create_date:"2016/7/18",id:"579610f508cc147f68edafb9"}
										,{title:"测试标题测试标题测试标题测试标题测试标题",create_date:"2016/7/18",id:"579610f508cc147f68edafb9"}
										,{title:"测试标题测试标题测试标题测试标题测试标题",create_date:"2016/7/18",id:"579610f508cc147f68edafb9"}
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





module.exports = {index:index,content:content,list:list};
