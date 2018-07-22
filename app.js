const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes");

const options = {
  title: {
    describe: "sets note title",
    demand: true,
    alias: "t"
  },
  body: {
    describe: "note boddy",
    demand: true,
    alias: "b"
  }
};

const oldA = process.argv;
const argv = yargs
  .command("add", "adds new note", options)
  .command("read", "reads specific note", { title: options.title })
  .command("remove", "deletes specific note", { title: options.title })
  .help().argv;
console.log(oldA);
console.log(argv);

switch (argv._[0]) {
  case "add":
    const note = notes.addNote(argv.title, argv.body);
    debugger;
    console.log(note ? `added note: ${note.title}` : `note already exists`);
    break;
  case "remove":
    const deleted = notes.removeNote(argv.title);
    console.log(deleted ? `removed note ${deleted.title}` : `no such`);
    break;
  case "list":
    notes.getAll();
    break;
  case "read":
    const noteRead = notes.getNote(argv.title);
    debugger;
    console.log(noteRead ? `readin ${noteRead.title}` : `can't read`);
    break;
  default:
    console.log("not recognized");
    break;
}
