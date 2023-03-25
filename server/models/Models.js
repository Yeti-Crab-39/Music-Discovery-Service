const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const musicSchema = new Schema({ 
    Song: { type: String, required: true },
    Artist: { type: String, required: true },
    uri: {type: String, required: true}
})

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  topTen: { type: [musicSchema], required: false }
});

const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

// pre- hooks are executed before MongoDB queries are made
userSchema.pre('save', function (next) {
  //'this' refers to the properties of this schema
  bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hash) => {
    if (err) return next(err);
    //update password to be the new hash
    this.password = hash;
    return next();
  });
});

//adding a method to user schema
userSchema.methods.comparePassword = function (password, next) {
  //compare method will compare the given password with the password from the database and check if matched
  bcrypt.compare(password, this.password, function (err, isMatch) {
    if (err) return next(err);
    next(null, isMatch);
  });
};

const Music = mongoose.model('music', musicSchema);
const User = mongoose.model('user', userSchema);

module.exports = {User, Music};