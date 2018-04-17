const express = require('express');

module.exports.login = function(req,res){
    res.render('login');
};

module.exports.home = function(req,res){
    res.send('home');
};

module.exports.addnewgoal = function(req,res){
    res.send('addnewgoal');
};

module.exports.diets = function(req,res){
    res.send('diets');
};
module.exports.goals = function(req,res){
    res.send('goals');
};
module.exports.health = function(req,res){
    res.send('health');
};
module.exports.signup = function(req,res){
    res.send('signup');
};
module.exports.social = function(req,res){
    res.send('social');
};
module.exports.workouts = function(req,res){
    res.send('workouts');
};