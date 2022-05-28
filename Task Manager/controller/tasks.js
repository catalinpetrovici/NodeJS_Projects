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

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const upTask = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ upTask });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const delTask = await Task.findOneAndDelete({ _id: taskID });
    if (!delTask)
      return res.status(404).json({ msg: `No task with id: ${taskID}` });

    // res.status(201).json({ delTask });
    // res.status(201).send();
    res.status(201).json({ delTask: null, status: 'success' });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
