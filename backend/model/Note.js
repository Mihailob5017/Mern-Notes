const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  noteName: { type: String, required: true, unique: true },
  noteText: { type: String, required: true },
  importance: { type: String, required: true }
});

module.exports = mongoose.model("notes", NoteSchema);
