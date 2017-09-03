console.log("Starting app");

const fs = require("fs"); // like import
const os = require("os");

var user = os.userInfo();

// is deprecated.
// fs.appendFile("greetings.txt", "Hello world");
// full version
// fs.appendFile("greetings.txt", "Hello world", function (err) {
//   if (err) {
//     console.log("Unable to write to file.")
//   }
// });
// es6
fs.appendFileSync("greetings.txt", `Hello ${user.username}!`);
