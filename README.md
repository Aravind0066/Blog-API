# Blog API

A simple RESTful API for a personal blogging platform built with **Node.js**, **Express.js**, and **MongoDB**.

This project is based on the **Blogging Platform API** project from roadmap.sh.

> **Project URL:** https://roadmap.sh/projects/blogging-platform-api

---

## Features

- Create a Blog Post
- Get All Blog Posts
- Get a Single Blog Post
- Update a Blog Post
- Delete a Blog Post
- Search Blog Posts *(In Progress)*
- MongoDB Integration
- RESTful API Design
- MVC Architecture

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Nodemon

---

## Project Structure

```
blog-api
│
├── src
│   ├── config
│   │   └── db.js
│   │
│   ├── controllers
│   │   └── postController.js
│   │
│   ├── models
│   │   └── Post.js
│   │
│   └── routes
│       └── postRoutes.js
│
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/<your-username>/blog-api.git
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/blog-api
```

Start the development server

```bash
npm run dev
```

---

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/posts` | Create a blog post |
| GET | `/posts` | Get all blog posts |
| GET | `/posts/:id` | Get a single blog post |
| PUT | `/posts/:id` | Update a blog post |
| DELETE | `/posts/:id` | Delete a blog post |
| GET | `/posts?term=keyword` | Search blog posts |

---

## Sample Request

### Create Post

```http
POST /posts
```

```json
{
  "title": "My First Blog",
  "content": "Hello World",
  "category": "Technology",
  "tags": ["NodeJS", "Express"]
}
```

---

## Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK |
| 201 | Created |
| 204 | No Content |
| 400 | Bad Request |
| 404 | Not Found |
| 500 | Internal Server Error |

---

## Future Improvements

- Search using Regex
- Input Validation
- Centralized Error Handling
- Pagination
- Authentication
- Swagger Documentation

---

## Experience Gained

Through this project, I gained hands-on experience with building a RESTful API using the MVC architecture and understood how an HTTP request flows through a backend application.

### Request Flow

```text
Client (Postman / Browser)

        │
        ▼

Express Server (server.js)

        │
        ▼

Routes

        │
        ▼

Controllers

        │
        ▼

Models (Mongoose)

        │
        ▼

MongoDB Database

        │
        ▼

Controller

        │
        ▼

HTTP Response (JSON)
```

### Key Learnings

- Understood how Express applications are structured using the MVC pattern.
- Learned the purpose of **server.js** as the application's entry point.
- Connected a Node.js application to MongoDB using Mongoose.
- Designed Mongoose Schemas and Models.
- Built RESTful CRUD APIs using Express Routes and Controllers.
- Learned the responsibility of each layer:
  - **server.js** – Application setup and initialization.
  - **Routes** – Maps API endpoints to controllers.
  - **Controllers** – Handles request processing and business logic.
  - **Models** – Interacts with the MongoDB database.
- Learned to use asynchronous database operations with `async/await`.
- Understood how middleware such as `express.json()` processes incoming requests before they reach the controllers.
- Worked with Express request objects:
  - `req.body`
  - `req.params`
  - `req.query`
- Learned the purpose and usage of common HTTP methods:
  - GET
  - POST
  - PUT
  - DELETE
- Learned appropriate HTTP status codes for REST APIs (200, 201, 204, 400, 404, 500).
- Tested API endpoints using Postman.
---

## Acknowledgements

This project was built as part of the **Backend Developer Roadmap** by roadmap.sh.

https://roadmap.sh/projects/blogging-platform-api
