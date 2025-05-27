# Task Manager API

A simple task management REST API built with Node.js, Express, and PostgreSQL using Sequelize ORM.

## 🔧 Tech Stack

- Node.js
- Express.js
- PostgreSQL + Sequelize
- JWT Authentication
- Bcrypt for password hashing
- Joi for validation
- Swagger for API documentation

## 🚀 Features

- User registration and login with hashed passwords
- JWT-based authentication
- Role-based access control (admin/user)
- Create, read, update, delete tasks
- Task time tracking and reporting
- Pagination and filtering for tasks
- Centralized error handling and validation

## 📦 Setup Instructions

1. Clone the repository
2. Run `npm install`
3. Create a `.env` file with:
   ```
   PORT=3000
   DB_HOST=localhost
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_NAME=task_manager
   DB_PORT=5432
   JWT_SECRET=your_jwt_secret
   ```
4. Ensure PostgreSQL is running and the database exists
5. Run the app:
   ```
   npm run dev
   ```

## 🧪 API Usage Examples

### Register

`POST /api/auth/register`

```json
{
  "username": "john",
  "password": "123456",
  "role": "user"
}
```

### Login

`POST /api/auth/login`

```json
{
  "username": "john",
  "password": "123456"
}
```

### Create Task

`POST /api/tasks`

```json
{
  "title": "Buy groceries",
  "description": "Milk, eggs, bread"
}
```

### Get Tasks

`GET /api/tasks?status=pending&limit=5&offset=0`

### Update Task

`PUT /api/tasks/1`

```json
{
  "status": "completed"
}
```

### Delete Task

`DELETE /api/tasks/1`

### Report Time

`GET /api/report-time`

### Task Summary Report

`GET /api/report`

## 📘 API Documentation

Swagger docs can be served from `swagger.yaml` using Swagger UI.

## 📫 Author

Built with ❤️ for the Node.js Backend Developer Assessment.
