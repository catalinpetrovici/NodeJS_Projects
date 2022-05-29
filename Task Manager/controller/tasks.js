const Task = require(`../models/Task`);
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-error');
// An instance of a model is called a document
// Queries are Not Promises

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(201).json({ tasks });
  // res.status(201).json({ tasks, amount: tasks.length });
  // res.status(201).json({ status: "success", data: { tasks, nbHits: tasks.length } });
  // res.status(201).json({ success: true });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const getTask = await Task.findOne({ _id: taskID });
  if (!getTask) {
    //custom error class
    return next(createCustomError(`No task with id: ${taskID}`, 404));
    // error from mongoose
    // return res.status(404).json({ msg: `No task with id: ${taskID}` });
  }

  res.status(201).json({ getTask });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    //custom error class
    return next(createCustomError(`No task with id: ${taskID}`, 404));
    // error from mongoose
    // return res.status(404).json({ msg: `No task with id: ${taskID}` });
  }

  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) return res.status(404).json({ msg: `No task with id: ${taskID}` });

  // res.status(201).json({ task });
  // res.status(201).send();
  res.status(201).json({ task: null, status: 'success' });
});

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
