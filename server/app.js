const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
// Allow Express to understand json
app.use(express.json());

//Router
const userRouter = require("./router/user");
app.use("/user", userRouter);

const articleRouter = require("./router/article");
app.use("/article", articleRouter);
// Connect to MongoDB

const mongoose = require("mongoose");
const uri = process.env.Mongo_DB;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((error) => {
    console.log(`There is a problem ${error.message}`);
  });

app.get("/", (req, res) => {
  try {
    res.status(200).send("Welcome To Nuntuim News Website");
  } catch (error) {
    res.status(err.status).json(error.message);
  }
});

module.exports = app;
