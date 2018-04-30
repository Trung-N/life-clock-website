const mongoose = require('mongoose');
var userSchema = mongoose.Schema({
  _id:String,
  "fullName": String,
  "email": String,
  "password": String,
  "age": Number,
  "exercise": String,
  "smoking": String,
  "diet": String,
  "sleep": String,
  "alcohol": String,
  "country": String,
  "friends": [{ body: String, date: Date }],
  "goals": [{ name: String, goalProgess: Number, date: Date }],
  "posts": [{ body: String, date: Date }]
});

mongoose.model('users',userSchema);
