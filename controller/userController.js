const database = require('../models/db.js');
const express = require('express');
const faker = require('faker');

module.exports.sayHello = function(req,res){
    res.send('Hello World');
};

module.exports.sayBye = function(req,res){
    res.send('Goodbye');
};

module.exports.sayHello = function(req,res){
    res.send('Hello World');
};

module.exports.AllUsers = function(req,res){
    res.send(database);
};

module.exports.User = function(req,res){
    res.render('users', {user : database[req.params.id]});
};