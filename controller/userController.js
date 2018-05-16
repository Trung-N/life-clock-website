const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const User = mongoose.model('user');
const router = require('../routes/routes.js');

module.exports.login = function(req,res){
    res.render('login');
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
module.exports.home = function(req,res){
    res.render('home', {user: req.user});
};

module.exports.updatehabits = function(req,res){
    const user = Object.assign(req.body);
    User.findOneAndUpdate({ _id: req.user._id }, 
         user, {upsert: true },function(err, response) {
        if (err) {
            return console.log(err);
       } else {
            res.redirect('/home');
       }
    });
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
    User.findOne({ 'id' :  req.body.accept }, function(err, user) {
        // if there are any errors, return the error
        if (err)
            return console.log(err);
        if (user) {
            req.user.goals[req.body.goal].goalProgress=req.body.progress;
            req.user.save();
            res.redirect('/goals');
        };
    });
};

module.exports.logintest = function(req,res){
    res.render('logintest', {user : req.user});
};

module.exports.addgoal = function(req,res){

    User.findOne({ 'id' :  req.body.accept }, function(err, user) {
        // if there are any errors, return the error
        if (err)
            return console.log(err);

        if (user) {
            
            var goaldetails = {
                "name":req.body.name,
                "target":req.body.target,
                "goalProgress":0 };
            }

            req.user.goals.push(goaldetails);
            req.user.save();
            res.redirect('/goals');
        });
    };

module.exports.acceptfriend = function(req,res){
    User.findOne({ 'email' :  req.body.accept }, function(err, user) {
        // if there are any errors, return the error
        if (err)
            return console.log(err);

        if (user) {
            var frienddetails = {
                "email":req.body.accept,
                "fullName":user.fullName
            };


            var mydetails = {
                "email":req.user.email,
                "fullName":req.user.fullName
            };

            req.user.friends.push(frienddetails);
            user.friends.push(mydetails);
            for(var i = 0;i<req.user.pendingFriends.length;i++){
                if(req.user.pendingFriends[i].email==req.body.accept){
                    req.user.pendingFriends[i].remove();
                }

            }
            user.save();
            req.user.save();
            res.redirect('/social');

        }

    });
};

module.exports.rejectfriend = function(req,res){

    for(var i = 0;i<req.user.pendingFriends.length;i++){
        if(req.user.pendingFriends[i].email==req.body.delete){
            req.user.pendingFriends[i].remove();
        }

    }
    req.user.save();
    res.redirect('/social');
};

module.exports.sendrequest = function(req,res){
    User.findOne({ 'email' :  req.body.email }, function(err, user) {
        // if there are any errors, return the error
        if (err)
            return console.log(err);

        if (user) {
            var mydetails = {
                "email":req.user.email,
                "fullName":req.user.fullName
            };
            user.pendingFriends.push(mydetails);
            user.save();
        }

    });
    res.redirect('/social');
};

module.exports.deletefriend = function(req,res){
    for(var i = 0;i<req.user.friends.length;i++){
        if(req.user.friends[i].email==req.body.delete){
            req.user.friends[i].remove();
        }

    }

    User.findOne({ 'email' :  req.body.delete }, function(err, user) {
        // if there are any errors, return the error
        if (err)
            return console.log(err);

        for(var i = 0;i<user.friends.length;i++){
            if(user.friends[i].email==req.user.email){
                user.friends[i].remove();
            }
        }
        user.save();
    });

    req.user.save();
    res.redirect('/social');
};

module.exports.motivate = function(req,res){
    User.findOne({ 'email' :  req.body.motivate }, function(err, user) {
        // if there are any errors, return the error
        if (err)
            return console.log(err);

        if (user) {
            var post= {
                "body": req.user.fullName.concat(" liked your post."),
                "date": new Date()
            };
            console.log(post);
            user.friendFeed.push(post);
            user.save();
        }

    });
    res.redirect('/social');
};

module.exports.likepost = function(req,res){
    User.findOne({ 'email' :  req.body.accept }, function(err, user) {
        // if there are any errors, return the error
        if (err)
            return console.log(err);

        if (user) {
            var post= {
                "body": req.user.fullName.concat(" liked your post."),
            "date": new Date()
        }
            user.personalFeed.push(post);
            user.save();

        }

    });
};

module.exports.postlogin = passport.authenticate('local-login', {
    successRedirect : '/home', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
});

module.exports.postsignup = passport.authenticate('local-signup', {
    successRedirect : '/login', // redirect to the secure profile section
    failureRedirect : '/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
});
