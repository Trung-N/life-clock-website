var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var userSchema = mongoose.Schema({
  "fullName": String,
  "email": String,
  "password": String,
  "goals": [{ "name": String, "goalProgress": Number, "target": Number}]
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

  "personalFeed": [{ body: String, date: Date }],
  "friendFeed": [{ body: String, date: Date }],
  "pendingFriends": [{id: String, dateOfRequest: Date }]
});*/

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
