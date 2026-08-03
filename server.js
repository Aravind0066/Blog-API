require("dotenv").config();

const connectDB = require("./src/config/db");
const express = require("express");
const PORT = process.env.PORT || 5000;


const app = express();
app.use(express.json());


const postRoutes = require("./src/routes/postRouter");

// this functions is nothing special just something.. to keep the app turned on else it would just be a one time run.
async function startServer(){
    await connectDB();
    
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}


app.get("/" , (req,res)=>{
    res.send("This is the Home Page.");
});

app.use("/post", postRoutes);

startServer();