console.log("Starting app.js");

const fs = require("fs"); // like import
const os = require("os");
const _ = require("lodash");

const notes = require("./notes");




// var fiteredArray = _.uniq(["edbutcher", 5, "edbutcher", 1, 2, 3, 4, 5, 6])
// console.log(fiteredArray);

// console.log(_.isString(true));
// console.log(_.isString("Alex"));
// console.log(_.isString(14));

// console.log("Results:", notes.add(5 , 6));
// var user = os.userInfo();
// is deprecated.
// fs.appendFile("greetings.txt", "Hello world");
// full version
// fs.appendFile("greetings.txt", "Hello world", function (err) {
//   if (err) {
//     console.log("Unable to write to file.")
//   }
// });
// es6
// fs.appendFileSync("greetings.txt", `Hello ${user.username}! You are ${notes.age}.`);
