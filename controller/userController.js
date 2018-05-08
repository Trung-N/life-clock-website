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
    res.render('goals',{user: req.user});
};
module.exports.health = function(req,res){
    res.render('health');
};
module.exports.signup = function(req,res){
    res.render('signup');
};
module.exports.social = function(req,res){
    res.render('social',{user: req.user});
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

module.exports.addgoal = function(req,res){
    var goaldetails = {
        "name":req.name,
        "target":req.body.target,
        "goalProgress":0 };
    console.log("here");
    User.findOneAndUpdate(
        { _id: req.body.id },
        { $push: { goal: goaldetails  } },
        function (error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log(success);
            }
        });
};

module.exports.acceptfriend = function(req,res){
    User.findOne({ 'email' :  req.body.accept }, function(err, user) {
        // if there are any errors, return the error
        if (err)
            return done(err);

        if (user) {
            var frienddetails = {
                "email":req.body.accept,
                "name":user.fullName
            };

            var mydetails = {
                "email":req.user.email,
                "name":req.user.fullName
            };

            req.user.friends.push(frienddetails);
            user.friends.push(mydetails);
            req.user.pendingFriends.find({'email':req.body.accept}).remove(callback);

        } else {
            return done(null, false, req.flash('acceptMessage', "That email doesn't exsist."));
        }

    });
};

module.exports.rejectfriend = function(req,res){
    req.user.pendingFriends.find({'email':req.body.delete}).remove(callback);
};

module.exports.sendrequest = function(req,res){
    User.findOne({ 'email' :  req.body.email }, function(err, user) {
        // if there are any errors, return the error
        if (err)
            return done(err);

        if (user) {
            var mydetails = {
                "email":req.user.email,
                "name":req.user.fullName
            };
            user.pendingFriends.push(mydetails);

        } else {
            return done(null, false, req.flash('acceptMessage', "That email doesn't exsist."));
        }

    });
};

module.exports.deletefriend = function(req,res){
    User.findOne({ 'email' :  req.body.delete }, function(err, user) {
        // if there are any errors, return the error
        if (err)
            return done(err);

        if (user) {
            var frienddetails = {
                "email":req.body.delete,
                "name":user.fullName
            };

            var mydetails = {
                "email":req.user.email,
                "name":req.user.fullName
            };

            req.user.friends.push(frienddetails);
            user.friends.push(mydetails);
            req.user.pendingFriends.find({'email':req.body.delete}).remove(callback);

        } else {
            return done(null, false, req.flash('acceptMessage', "That email doesn't exsist."));
        }

    });
};

module.exports.motivate = function(req,res){
    User.findOne({ 'email' :  req.body.accept }, function(err, user) {
        // if there are any errors, return the error
        if (err)
            return done(err);

        if (user) {
            var post= {
                "body": req.user.fullName.concat(" sends motivations."),
                "date": new Date()
            }
            user.personalFeed.push(post);

        } else {
            return done(null, false, req.flash('acceptMessage', "That email doesn't exsist."));
        }

    });
};

module.exports.likepost = function(req,res){
    User.findOne({ 'email' :  req.body.accept }, function(err, user) {
        // if there are any errors, return the error
        if (err)
            return done(err);

        if (user) {
            var post= {
                "body": req.user.fullName.concat(" liked your post."),
            "date": new Date()
        }
            user.personalFeed.push(post);

        } else {
            return done(null, false, req.flash('acceptMessage', "That email doesn't exsist."));
        }

    });
};

module.exports.postlogin = passport.authenticate('local-login', {
    successRedirect : '/home', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
});

module.exports.postsignup = passport.authenticate('local-signup', {
    successRedirect : '/logintest', // redirect to the secure profile section
    failureRedirect : '/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
});
