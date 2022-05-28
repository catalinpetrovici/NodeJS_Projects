const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

module.exports = mongoose.model('Task', TaskSchema);

// Model is a wrapper for the schema
// Model provides a interface to the database
// Schema defines the structure for the document, type, validation,...
