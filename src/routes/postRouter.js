const express = require("express");
const router = express.Router();

const {
    createPost, 
    updatePost, 
    deletePost, 
    getPosts, 
    getPost     
} = require("../controllers/postController");

router.post("/", createPost);

router.get("/", getPosts)

router.get("/:id", getPost);

router.put("/:id", updatePost);

router.delete("/:id", deletePost);

module.exports = router;