const mongoose = require("mongoose");

new postSchema = new mongoose.Schema(
    {
        title : {
            type : String,
            required : true,
            trim : true,
        },
        content : {
            type : String,
            required : true,
        }, 
        category : {
            type : String,
            required : true,
            trim : true,
        },
        tags : {
            type : [String],
            default : [],
        }
    },
    {
        timestamps : true,
    }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;