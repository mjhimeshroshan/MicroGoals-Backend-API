MicroGoals – Secure Goal Management Backend API

📝 Project Overview

MicroGoals is a secure RESTful API developed as part of the Naan Mudhalvan project. Built using the MERN stack (specifically Node.js, Express, and MongoDB), this backend system allows users to securely manage personal goals.

The project implements a robust MVC (Model-View-Controller) architecture and ensures data privacy through JWT (JSON Web Token) Authentication, meaning users can only access and modify their own goals.

✨ Key Features

User Authentication: Secure Signup and Login with password hashing (BcryptJS).

JWT Protection: State-of-the-art security where API routes are protected by bearer tokens.

Full CRUD Operations:

Create: Add new personal goals.

Read: Fetch goals specific to the logged-in user.

Update: Mark goals as completed or modify titles.

Delete: Remove goals from the database.

Database Integration: Persistent storage using MongoDB.

Error Handling: Centralized middleware to handle validation and server errors.

🛠️ Tech Stack

Runtime Environment: Node.js

Web Framework: Express.js

Database: MongoDB (Mongoose ODM)

Security: JSON Web Tokens (JWT) & BcryptJS

Environment Management: Dotenv

Testing Tool: Thunder Client / Postman

📂 Project Structure

MicroGoals/
├── middleware/    # Auth and Error handling logic
├── models/        # Mongoose Schemas (User & Goal)
├── routes/        # API Endpoints (Auth & Goals)
├── .env           # Environment Variables (Private)
├── Index.js       # Entry Point
└── package.json   # Dependencies and Scripts


🚀 Getting Started

Prerequisites

Node.js installed

MongoDB running locally or an Atlas URI

Installation & Setup

Clone the repository:

git clone <your-repository-link>
cd MicroGoals


Install dependencies:

npm install


Configure Environment Variables:
Create a .env file in the root directory:

PORT=5000
MONGO_URI=mongodb://localhost:27017/libspace
JWT_SECRET=your_secret_key


Run the server:

npm start


🧪 API Endpoints Reference

Method     Endpoint             Description                  Auth Required

POST       /api/auth/register   User Signup                   No

POST       /api/auth/login      User Login (Returns Token)    No

POST       /api/goals/create    Add a new goal                Yes

GET        /api/goals/          Fetch all user goals          Yes

PUT        /api/goals/:id       Update goal status            Yes

DELETE     /api/goals/:id       Remove a goal                 Yes

Developed for the Naan Mudhalvan Skill Development Initiative.