var mongoose = require('mongoose');

mongoose.connect('mongodb://team-tam:9r2ysvlm@ds259079.mlab.com:59079/team-tam)',function(err){
	if(!err){
		console.log("connected to mongo");
	}
	else{
		console.log("failed to connect");
	}
});

require('./user.js');
