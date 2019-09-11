var db = require("./db");
(async () => {
  let resp = await db.createUser({
    username: "Sebastian",
    password: "1234",
    referral: "q45@hX"
  });
  console.log(JSON.stringify(resp));
  // await db.readByReferral
  // await db.readByUsername
})();
