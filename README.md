# Basic User Management System

> A simple yet secure user management system demonstrating authentication, session management, and CRUD operations with Node.js and MongoDB.

## Overview

This is a full-featured user management system built with Node.js, Express.js, EJS for templating, and MongoDB as the database. It allows users to register, log in, log out, and view/update their profiles. The application demonstrates basic CRUD operations for user data and session management for authentication with industry-standard security practices.

## Features

- User registration with email and password (hashed for security)
- User login and logout functionality
- Protected routes for authenticated users (e.g., profile page)
- Basic profile viewing and editing
- Error handling for invalid inputs and authentication failures
- Responsive design using Bootstrap
- Session persistence with MongoDB store
- Secure password hashing with bcrypt

## Tech Stack

### Backend

- **Node.js** - JavaScript runtime for server-side logic
- **Express.js** - Web framework for handling routes and middleware
- **MongoDB** - NoSQL database for storing user data
- **Mongoose** - ODM library for MongoDB object modeling

### Frontend

- **EJS** - Embedded JavaScript templating engine
- **Bootstrap** - Responsive UI framework

### Security & Session Management

- **bcryptjs** - Password hashing
- **express-session** - Session management
- **connect-mongo** - MongoDB session store

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- Git
- npm or yarn

## Getting Started

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/user-management-system.git
cd user-management-system
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

Create a `.env` file in the root directory:

```bash
PORT=3000
MONGO_URI=mongodb://localhost:27017/userdb
SESSION_SECRET=your_secret_key_here
```

**Important:** Replace `your_secret_key_here` with a strong, random string.

4. Start MongoDB server (if using local installation)

```bash
mongod
```

### Running the Application

#### Production Mode

```bash
npm start
```

#### Development Mode (with auto-reload)

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Project Structure

```
user-management-system/
├── models/              # Mongoose models (e.g., User.js)
├── routes/              # Express routes (e.g., auth.js, user.js)
├── views/               # EJS templates (e.g., register.ejs, login.ejs)
├── public/              # Static assets (CSS, JS, images)
├── middleware/          # Custom middleware (e.g., auth.js)
├── .env                 # Environment variables (git ignored)
├── .gitignore          # Git ignore file
├── app.js              # Main application file
├── package.json        # Dependencies and scripts
└── README.md           # This file
```

## Usage Guide

### 1. Register a New Account

- Navigate to `/register`
- Fill out the registration form with email and password
- Submit to create your account

### 2. Login

- Go to `/login`
- Enter your registered credentials
- Successful login redirects to your profile

### 3. View/Edit Profile

- After login, access `/profile`
- View your account details
- Update information as needed

### 4. Logout

- Click the logout button
- Session will be terminated and you'll be redirected to the login page

## Database Schema

### User Model

| Field       | Type   | Required | Unique | Description                |
| ----------- | ------ | -------- | ------ | -------------------------- |
| `email`     | String | Yes      | Yes    | User's email address       |
| `password`  | String | Yes      | No     | Hashed password            |
| `name`      | String | No       | No     | User's full name           |
| `createdAt` | Date   | Auto     | No     | Account creation timestamp |
| `updatedAt` | Date   | Auto     | No     | Last update timestamp      |

**Example User Document:**

```javascript
{
  _id: ObjectId("..."),
  email: "user@example.com",
  password: "$2a$10$...", // Hashed
  name: "John Doe",
  createdAt: ISODate("2024-01-01T00:00:00.000Z"),
  updatedAt: ISODate("2024-01-01T00:00:00.000Z")
}
```

## API Routes

### Authentication Routes

| Method | Endpoint    | Description               | Protected |
| ------ | ----------- | ------------------------- | --------- |
| GET    | `/register` | Display registration form | No        |
| POST   | `/register` | Create new user account   | No        |
| GET    | `/login`    | Display login form        | No        |
| POST   | `/login`    | Authenticate user         | No        |
| GET    | `/logout`   | End user session          | Yes       |

### User Routes

| Method | Endpoint   | Description         | Protected |
| ------ | ---------- | ------------------- | --------- |
| GET    | `/profile` | View user profile   | Yes       |
| POST   | `/profile` | Update user profile | Yes       |

## Environment Variables

| Variable         | Description                       | Example                            | Required           |
| ---------------- | --------------------------------- | ---------------------------------- | ------------------ |
| `PORT`           | Server port number                | `3000`                             | No (default: 3000) |
| `MONGO_URI`      | MongoDB connection string         | `mongodb://localhost:27017/userdb` | Yes                |
| `SESSION_SECRET` | Secret key for session encryption | `my_super_secret_key_123`          | Yes                |

## Security Features

### Password Security

- Passwords are hashed using **bcrypt** with a salt round of 10
- Plain text passwords are never stored in the database
- Password complexity validation on registration

### Session Management

- Sessions are stored in MongoDB using `connect-mongo`
- Session cookies are HTTP-only to prevent XSS attacks
- Sessions expire after inactivity

### Best Practices Implemented

- Environment variables for sensitive data
- Input validation and sanitization
- Protected routes with authentication middleware
- Error handling for common security scenarios

## Security Notes

⚠️ **Important Security Considerations:**

1. **Production Deployment:**

   - Use HTTPS in production for secure data transmission
   - Set `NODE_ENV=production` environment variable
   - Use strong, unique session secrets
   - Enable secure cookies in production

2. **MongoDB Security:**

   - Use MongoDB authentication
   - Limit database user permissions
   - Consider MongoDB Atlas for managed security

3. **Additional Recommendations:**
   - Implement rate limiting for login attempts
   - Add CSRF protection for forms
   - Consider implementing 2FA for enhanced security
   - Regular security audits and dependency updates

## Development

### Available Scripts

```bash
# Start the application
npm start

# Start with nodemon for auto-reload
npm run dev

# Run tests (if configured)
npm test

# Check for security vulnerabilities
npm audit
```

### Adding New Features

When extending this project, consider:

- Password reset functionality
- Email verification
- User roles and permissions
- Profile picture uploads
- Account deletion

## Troubleshooting

### MongoDB Connection Issues

```bash
# Check if MongoDB is running
mongod --version

# Start MongoDB service (Linux/Mac)
sudo systemctl start mongod

# Windows
net start MongoDB
```

### Port Already in Use

If port 3000 is already in use, change the `PORT` in your `.env` file:

```
PORT=3001
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Your Name - [@ahmedwagd](https://github.com/ahmedwagd)

Project Link: [https://github.com/ahmedwagd/user-management-system](https://github.com/ahmedwagd/user-management-system)

## Acknowledgments

- Express.js documentation
- MongoDB documentation
- Bootstrap for responsive design
- bcrypt.js for password hashing
- The Node.js community

---
