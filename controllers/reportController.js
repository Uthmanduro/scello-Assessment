const { Task } = require('../models');

exports.reportTime = async (req, res, next) => {
  try {
    const tasks = await Task.findAll({ where: { UserId: req.user.id } });
    const report = tasks.map((task) => ({
      title: task.title,
      timeSpent: task.timeSpent,
    }));
    res.json(report);
  } catch (err) {
    next(err);
  }
};

exports.reportSummary = async (req, res, next) => {
  try {
    const tasks = await Task.findAll({ where: { UserId: req.user.id } });
    const summary = { pending: 0, 'in-progress': 0, completed: 0 };
    tasks.forEach((task) => summary[task.status]++);
    res.json(summary);
  } catch (err) {
    next(err);
  }
};
