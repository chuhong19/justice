const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  text: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Note', NoteSchema);
