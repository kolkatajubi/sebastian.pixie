var redis = require("redis");
var client = redis.createClient("10.139.47.224", "6379");
client.auth("kolkatachampspixie");

client.on("connect", function() {
  console.log("connected");
});

client.on("error", function(err) {
  console.log("Error " + err);
});

module.exports = {
  setSessionId: sessionId => {
    return new Promise((resolve, reject) => {
      client.set(sessionId, username, redis.print);
      client.expire(sessionId, 3600);
      return resolve();
    });
  },
  checkLogin: (sessionId, username) => {
    return new Promise((resolve, reject) => {
      client.get(sessionId, (err, usernameCache) => {
        if (err) {
          return resolve({ status: "error", data: err });
        }
        if (username == usernameCache) {
          return resolve({ status: "success" });
        }
        return resolve({ status: "error" });
      });
    });
  }
};
