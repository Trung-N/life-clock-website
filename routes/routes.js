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
    app.get('/health',controller.health);
    app.get('/signup',controller.signup);
    app.get('/social',controller.social);
    app.get('/workouts',controller.workouts);
    app.post('/updatehabits',controller.updatehabits);
    app.post('/removegoal',controller.removegoal);
    app.post('/updategoal',controller.updategoal);
    app.post('/login',controller.postlogin);
    app.post('/signup',controller.postsignup);
    app.post('/addgoal',controller.addgoal);
    app.post('/acceptfriend',controller.acceptfriend);
    app.post('/rejectfriend',controller.rejectfriend);
    app.post('/sendrequest',controller.sendrequest);
    app.post('/deletefriend',controller.deletefriend);
    app.post('/likepost',controller.likepost);
    app.post('/motivate',controller.motivate);
    app.get('/logintest',controller.logintest);
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

