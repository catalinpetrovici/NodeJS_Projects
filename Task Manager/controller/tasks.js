const Task = require(`../models/Task`);
// An instance of a model is called a document
// Queries are Not Promises

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.find({});
    res.status(201).json({ allTasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const getTask = await Task.findOne({ _id: taskID });
    if (!getTask)
      return res.status(404).json({ msg: `No task with id: ${taskID}` });

    res.status(201).json({ getTask });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = (req, res) => {
  res.send('update task');
};

const deleteTask = (req, res) => {
  res.send('delete task');
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
