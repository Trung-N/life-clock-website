const mongoose = require('mongoose');
var userSchema = mongoose.Schema({
  "fullName": String,
  "email": String,
  "password": String
});

mongoose.model('user',userSchema);


/* the schema we want to implement
var userSchema = mongoose.Schema({
  "fullName": String,
  "email": String,
  "password": String,
  "dateOfBirth": Date,
  "exercise": [{behaviour: Number, startDate: Date}],
  "smoking": [{behaviour: Number, startDate: Date}],
  "diet": [{behaviour: Number, startDate: Date}],
  "sleep": [{behaviour: Number, startDate: Date}],
  "alcohol": [{behaviour: Number, startDate: Date}],
  "country": String,
  "friends": [{id:String}],
  "goals": [{ name: String, goalProgess: Number, target: Number, type: String , dateStarted: Date, dateCompleted: Date }],
  "personalFeed": [{ body: String, date: Date }],
  "friendFeed": [{ body: String, date: Date }],
  "pendingFriends": [{id: String, dateOfRequest: Date }]
});*/

module.exports.getUserByUsername = function(email,callback) {
    var wuery = {email:email};
    User.findOne(query,callback);
}
