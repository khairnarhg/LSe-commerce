const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  user_id: String, 
  first_name: String,
  last_name: String,
  emailId: { type: String, unique: true }, 
  password: String,
  dob: Date,
});

module.exports = mongoose.model('User', userSchema);
