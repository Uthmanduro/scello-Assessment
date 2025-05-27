const { Task } = require('../models');

exports.createTask = async (req, res, next) => {
  try {
    const task = await Task.create({ ...req.body, UserId: req.user.id });
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

exports.getTasks = async (req, res, next) => {
  try {
    const { status, limit = 10, offset = 0 } = req.query;
    const where = { UserId: req.user.id };
    if (status) where.status = status;

    const tasks = await Task.findAll({ where, limit: +limit, offset: +offset });
    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

exports.updateTask = async (req, res, next) => {
  try {
    const task = await Task.findOne({
      where: { id: req.params.id, UserId: req.user.id },
    });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    await task.update(req.body);
    res.json(task);
  } catch (err) {
    next(err);
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findOne({
      where: { id: req.params.id, UserId: req.user.id },
    });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    await task.destroy();
    res.json({ message: 'Task deleted' });
  } catch (err) {
    next(err);
  }
};
