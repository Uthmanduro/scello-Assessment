const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.js`)[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    port: config.port,
    operatorsAliases: 0,
    // pool: {
    //   max: config.pool.max,
    //   min: config.pool.min,
    //   acquire: config.pool.acquire,
    //   idle: config.pool.idle,
    // },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    retry: {
      max: 3, // Retry connection up to 3 times
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to database establised');
  })
  .catch((err) => {
    console.error(`Unable to connect to database:`);
  });

module.exports = sequelize;
