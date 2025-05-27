require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
// const sequelize = require('./config/connection');
const db = require('./models');

const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const reportRoutes = require('./routes/reportRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api', reportRoutes);

// Error handler
app.use(errorHandler);

// // Initialize database connection and sync models
// async function initializeDatabase() {
//   try {
//     await sequelize.sync({ alter: true }); // Use { force: true } only in development if you want to drop tables
//     console.log('Database tables created/updated successfully!');
//   } catch (error) {
//     console.error('Error syncing database:', error);
//   }
// }

// initializeDatabase();

async function syncDatabase() {
  try {
    // Use force: true only in development (will drop tables)
    // Use alter: true for safer synchronization
    await db.sequelize.sync({ alter: true });
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Failed to sync models:', error);
  }
}

syncDatabase();

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
