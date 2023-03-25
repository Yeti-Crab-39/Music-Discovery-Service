const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const musicSchema = new Schema({ 
    Song: { type: String, required: true },
    Artist: { type: String, required: true },
})

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  topTen: { type: [musicSchema], required: false }
});

const User = mongoose.model('user', userSchema);

module.exports = User;