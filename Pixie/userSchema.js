var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var User = new Schema({
  username: String,
  password: String,
  referral: String
});

User.index({ username: 1 });
User.index({ referral: 1 });

module.exports = mongoose.model("User", User);
