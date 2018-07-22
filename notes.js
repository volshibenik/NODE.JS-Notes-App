const fs = require("fs");
const _ = require("lodash");

const fetchNotes = () => {
  try {
    const notesStr = fs.readFileSync("noteBook.json");
    return JSON.parse(notesStr);
  } catch (e) {
    console.log(e);
    return [];
  }
};

const saveNotes = notes =>
  fs.writeFileSync("noteBook.json", JSON.stringify(notes));
// ---------- //

const addNote = (title, body) => {
  const note = {
    title,
    body
  };
  const notes = fetchNotes();
  const alreadyExists = _.some(notes, ["title", title]);

  if (!alreadyExists) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const removeNote = title => {
  const notes = fetchNotes();
  const [deleted] = _.remove(notes, { title: title });

  saveNotes(notes);
  return deleted;
};

const getAll = () => console.log("all notes");

const getNote = title => {
  const notes = fetchNotes();
  return _.find(notes, { title: title });
};
module.exports = {
  addNote,
  removeNote,
  getAll,
  getNote
};
