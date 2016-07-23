var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/picStation');
mongoose.connection.on('open',function(){
	console.log('connected successful');
});
module.exports = mongoose;
