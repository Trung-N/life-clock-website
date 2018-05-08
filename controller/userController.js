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

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use(new Strategy(
    {
        usernameField: 'email'
    },
    function(email, password, done) {
        console.log('username, password: ', username, password);
        User.findOne({ email: email }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!user.verifyPassword(password)) { return done(null, false); }
            return done(null, user);
        });
    }
));

module.exports.authenticate =(
    passport.authenticate('local', { failureRedirect: '/login'}),
    function(req, res) {
        res.redirect('/');
    });