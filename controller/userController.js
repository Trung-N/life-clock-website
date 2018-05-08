const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const User = mongoose.model('user');
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

module.exports.logintest = function(req,res){
    res.render('logintest', {user : req.user});
};

module.exports.postlogin = passport.authenticate('local-login', {
    successRedirect : '/logintest', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
});

module.exports.postsignup = passport.authenticate('local-signup', {
    successRedirect : '/logintest', // redirect to the secure profile section
    failureRedirect : '/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
});
