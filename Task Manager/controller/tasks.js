const Task = require(`../models/Task`);
// An instance of a model is called a document

const getAllTasks = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};

const createTask = (req, res) => {
  res.json(req.body);
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};
const updateTask = (req, res) => {
  res.send('update task');
};
const deleteTask = (req, res) => {
  res.send('delete task');
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
