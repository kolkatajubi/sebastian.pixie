var mongoose = require("mongoose");
var User = require("./userSchema");
mongoose.connect("mongodb://10.139.47.224:27017/pixie", {
  useNewUrlParser: true
});

module.exports = {
  readByUsername: username => {
    return new Promise((resolve, reject) => {
      var filter = { username: username };
      User.find(filter, function(err, data) {
        if (err) {
          return reject({ status: "error", data: err });
        }
        return resolve({ status: "success", data: data });
      });
    });
  },
  readByReferral: ref => {
    return new Promise((resolve, reject) => {
      var filter = { referral: ref };
      User.find(filter, function(err, data) {
        if (err) {
          return reject({ status: "error", data: err });
        }
        return resolve({ status: "success", data: data });
      });
    });
  },
  createUser: user => {
    return new Promise((resolve, reject) => {
      var newUser = new User(user);
      newUser.save(function(err, data) {
        if (err) {
          return reject({ status: "error", data: err });
        }
        return resolve({ status: "success", data: data });
      });
    });
  }
};
