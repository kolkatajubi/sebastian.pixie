var db = require("./db");
var cache = require("./cache");

// Dependencies
const express = require("express");
const app = express();

const bodyparser = require("body-parser");

// Defining Path for URL Re-routes
var path = require("path");

// Body Parser will parse the HTML and return it in non-encoded format
app.use(
  bodyparser.urlencoded({
    extended: false
  })
);

// Body Parser will parse the HTML and return it in JSON format
app.use(bodyparser.json());

// Defining IP-Address and PORT number
const ipaddress = "127.0.0.1";
const port = 3125;

// Listening to the IP-Address:PORT number
app.listen(port, ipaddress, () =>
  console.log(`Listening at ${ipaddress}:${port}...`)
);

app.post("/checkLogin", (req, res) => {
  res.json(await cache.checkLogin(req.body.sessionId, req.body.username));
});

app.post("/setSessionId", (req, res) => {
  res.json(await cache.setSessionId(req.body.sessionId));
});

app.post("/readByUsername", (req, res) => {
  res.json(await db.readByUsername(req.body.username));
});

app.post("/readByReferral", (req, res) => {
  res.json(await db.readByReferral(req.body.referral));
});

app.post("/createUser", (req, res) => {
  res.json(await db.createUser(req.body));
});
