const fs = require('fs'); // like import
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};
cosnt bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};
const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions
  })
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .help()
  .argv;
var command = argv._[0];

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log('Note title taken');
  };
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('Note found');
    notes.logNote(note);
  } else {
    console.log('Note not found');
  };
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
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
