const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const controller = require('../controller/userController.js');

module.exports = function(app, passport) {

    app.get('/',controller.login);
    app.get('/login',controller.login);
    app.get('/home',controller.home);
    app.get('/addnewgoal',controller.addnewgoal);
    app.get('/diets',controller.diets);
    app.get('/goals',controller.goals);
    app.get('/updategoal',controller.updategoal);
    app.get('/health',controller.health);
    app.get('/signup',controller.signup);
    app.get('/social',controller.social);
    app.get('/workouts',controller.workouts);
    app.get('/logintest',controller.logintest);
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/home', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));


};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

