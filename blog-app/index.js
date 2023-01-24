const express = require("express");
const mongoose = require("mongoose");
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require("./config/config");

const postRouter = require("./routes/postRoutes")
const userRouter = require("./routes/userRoutes")

const app = express();

const mongoURL= `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

const connectWithRetry = () => {
mongoose
    .connect(mongoURL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false
    })
    .then(() => console.log("Successfuly log in the database"))
    .catch((e) => {console.log(e)
    setTimeout(connectWithRetry,5000)

});
}
connectWithRetry();
//  it is given because if node don't connect with mongooes it retry after few time automaticly


app.use(express.json());
// it is given because expresss donot take the req.body directly basicaly it is a middleware

app.get("/",(req,res)=>{
    res.send("<h2>HI BRO PRINCE I AM UP! <h2/>")
})


// localhost:3000/api/posts/
app.use("/api/posts", postRouter)
// http://localhost:3000/api/users/singup
app.use("/api/users", userRouter)
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`))  