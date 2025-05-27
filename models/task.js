const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Task = sequelize.define(
    'Task',
    {
      title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING },
      status: {
        type: DataTypes.ENUM('pending', 'in-progress', 'completed'),
        defaultValue: 'pending',
      },
      timeSpent: { type: DataTypes.INTEGER, defaultValue: 0 },
    },
    {
      timestamps: true,
    }
  );

  return Task;
};
