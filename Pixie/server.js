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

app.post("/checkLogin", async (req, res) => {
  res.json(await cache.checkLogin(req.body.sessionId, req.body.username));
});

app.post("/setSessionId", async (req, res) => {
  await cache.setSessionId(req.body.sessionId, req.body.username);
  res.json({ status: "success" });
});

app.post("/readByUsername", async (req, res) => {
  res.json(await db.readByUsername(req.body.username));
});

app.post("/readByReferral", async (req, res) => {
  res.json(await db.readByReferral(req.body.referral));
});

app.post("/createUser", async (req, res) => {
  res.json(await db.createUser(req.body));
});
