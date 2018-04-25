var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var userSchema = new Schema({
    name: String,
    email: String,
    password: String, //maybe there is a more secure way to do this
    age: Number,
    exercise: Number, // or string
    smoking: Number,
    alcohol: Number,
    country: String,
    friends: [{ body: String, date: Date }],
    goals: [{ name: String, goalProgess: Number, date: Date }],
    posts: [{ body: String, date: Date }],
  });


