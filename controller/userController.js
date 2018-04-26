const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('users');

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

module.exports.createUser = function(req,res){
	var user = new User({
		"fullName":req.body.fullName,
		"email":req.body.email,
		"age":req.body.age,
		"exercise":req.body.exercise,
		"smoking":req.body.smoking,
		"diet":req.body.diet,
		"sleep":req.body.sleep,
		"alcohol":req.body.alcohol,
		"country":req.body.country
	});
	user.save(function(err,newUser){
		if(!err){
			res.send(newUser);
		}
		else{
			res.sendStatus(400);
		}
	});
};
