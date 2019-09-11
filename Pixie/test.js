var db = require("./db");
(async () => {
  //   let resp = await db.createUser({
  //     username: "Sebastian",
  //     password: "1234",
  //     referral: "q45@hX"
  //   });
  let resp = await db.readByReferral("q45@hX");
  console.log(JSON.stringify(resp));
  resp = await db.readByUsername("Sebastian");
  console.log(JSON.stringify(resp));
})();
