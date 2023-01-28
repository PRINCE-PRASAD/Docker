const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const redis = require("redis")
const cors = require("cors");
let RedisStore = require("connect-redis")(session)


const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT, REDIS_URL, SESSION_SECRET, REDIS_PORT, } = require("./config/config");

let redisClient = redis.createClient({
    host: REDIS_URL,
    port: REDIS_PORT
})

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

app.enable(cors({}));
// it added becuse it dont give error while taking frontend and backend

app.enable("trust proxy");

// it help in trus the headers that niginx server sending to ...


app.use(session({
    store: new RedisStore({client: redisClient}),
    secret: SESSION_SECRET,
    cookie: {
        secure: false,
        resave: false,
        saveUninitialized: false,
        httpOnly: true,
        maxAge: 30000,
    }
}));



app.use(express.json());
// it is given because expresss donot take the req.body directly basicaly it is a middleware

app.get("/api/v1",(req, res)=>{
    res.send("<h2>HI BRO PRINCE I AM UP! <h2/>")
    console.log("check for does nginx load balancing")
})


// localhost:3000/api/v1/post/
app.use("/api/v1/post", postRouter)
// http://localhost:3000/api/v1/user/signup
app.use("/api/v1/user", userRouter)
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`))  