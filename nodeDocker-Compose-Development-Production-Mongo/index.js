const express = require("express");
const mongoose = require("mongoose");
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require("./config/config");


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

app.get("/",(req,res)=>{
    res.send("<h2>HI BRO PRINCE I AM UP! <h2/>")
})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`))