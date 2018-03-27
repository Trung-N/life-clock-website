const database = require('../models/db.js');
const express = require('express');
const faker = require('faker');

module.exports.comingsoon = function(req,res){
    res.render('coming');
};

module.exports.sayBye = function(req,res){
    res.send('Goodbye');
};

module.exports.AllUsers = function(req,res){
    res.send(database);
};

module.exports.User = function(req,res){
    res.render('users', {user : database[req.params.id]});
};