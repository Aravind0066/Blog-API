const Post = require("../models/Post");

const createPost = async (req, res)=>{  
        //req.body has the necesary details
        // no need to manuallly write res.body.title annol.. 
    const post = await Post.create(req.body); 
        // instead of res.send we use json(post)
    res.status(201).send("Created").json(post);  
}

const updatePost = async (req, res)=>{
    //no need to store in post adn do the update..
    const post = await Post.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send("OK").json(post);
}

const deletePost = async (req, res)=>{
    await Post.findByIdAndDelete(req.params.id);
    res.sendStatus(204).send("Post Deleted")
}

const getPost = async (req, res)=>{
    const post = await Post.findById(req.params.id);
    res.status(200).json(post)
}

const getPosts = async (req, res)=>{
    const posts = await Post.find();
    //no need posts[] ??    
    res.status(200).json(posts);
}

module.exports = {
    createPost, updatePost, deletePost, getPosts, getPost,
}
