const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('users');
const router = require('../routes/routes.js');

module.exports.login = function(req,res){
    res.render('login');
};

module.exports.home = function(req,res){
    res.render('home');
};

module.exports.addnewgoal = function(req,res){
    res.render('addnewgoal');
};

module.exports.diets = function(req,res){
    res.render('diets');
};
module.exports.goals = function(req,res){
    res.render('goals');
};
module.exports.health = function(req,res){
    res.render('health');
};
module.exports.signup = function(req,res){
    res.render('signup');
};
module.exports.social = function(req,res){
    res.render('social');
};
module.exports.workouts = function(req,res){
    res.render('workouts');
};

module.exports.updategoal = function(req,res){
    res.render('updategoal');
};

module.exports.createUser = function(req,res){
	var user = new User({
		"fullName":req.body.fullName,
		"email":req.body.email,
		"password":req.body.password
	});
	user.save(function(err,newUser){
		if(!err){
			res.redirect('/login');
			//res.sendStatus(200);
			//router.get('/login',controller.login);
		}
		else{
			res.sendStatus(400);
		}
	});
};
