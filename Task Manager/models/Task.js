const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'You must provide name'],
    trim: true,
    maxlength: [20, 'Name can not be more than 20 characters'],
  },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model('Task', TaskSchema);

// Model is a wrapper for the schema
// Model provides a interface to the database
// Schema defines the structure for the document, type, validation,...
