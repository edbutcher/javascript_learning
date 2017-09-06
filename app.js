console.log("Starting app.js");

const fs = require('fs'); // like import
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
var command = argv._[0];
console.log('command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  } else {
    console.log('Note title taken');
  }

}else if (command === 'list') {
  notes.getAll();
}else if (command === 'read') {
  notes.getNote(argv.title);
}else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
}else {
  console.log('Command not recognized');
}




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