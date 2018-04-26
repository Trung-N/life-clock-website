var mongoose = require('mongoose');

mongoose.connect('mongodb://team-tam:xb2gt16y@ds259079.mlab.com:59079/team-tam',function(err){
	if(!err){
		console.log("connected to mongo");
	}
	else{
		console.log("failed to connect");
	}
});

require('./user.js');
