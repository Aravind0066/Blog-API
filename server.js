require("dotenv").config();

const connectDB = require("./src/config/db");
const express = require("express");
const PORT = process.env.PORT || 5000;


const app = express();
app.use(express.json());


const postRoutes = require("./src/routes/postRouter");


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