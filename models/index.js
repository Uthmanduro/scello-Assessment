const { Sequelize } = require('sequelize');
const dbConfig = require('../config/config').development;

const sequelize = new Sequelize(dbConfig);

// const db = {};
// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// // Models
// db.User = require('./user')(sequelize);
// db.Task = require('./task')(sequelize); // task.js will come next

// module.exports = db;

// const sequelize = require('../config/connection');

const db = {};

// Load models
db.User = require('./user')(sequelize);
db.Task = require('./task')(sequelize);

// Set up associations
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Sync function
db.sync = async (options = { alter: true }) => {
  try {
    await sequelize.sync(options);
    console.log('Database synced successfully');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
};

module.exports = db;
