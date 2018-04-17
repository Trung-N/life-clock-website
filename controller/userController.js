const express = require('express');

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