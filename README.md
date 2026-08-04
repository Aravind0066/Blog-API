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

## Acknowledgements

This project was built as part of the **Backend Developer Roadmap** by roadmap.sh.

https://roadmap.sh/projects/blogging-platform-api
