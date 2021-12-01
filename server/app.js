const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));

const cookieParser = require("cookie-parser");
const session = require("express-session");

app.use(express.json());
// Let Express understand  Content-Type: application/x-www-form-urlencoded aka form data

app.use(
  express.urlencoded({
    extended: true,
  })
);

// cookies
app.use(cookieParser());
// session
app.use(
  session({
    key: "token-key",
    secret: process.env.TOKEN_TEXT,
    resave: false,
    saveUninitialized: false,
  })
);

const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
    method: ["GET", "POST", "DELETE", "PATCH"],
    credentials: true,
  })
);

// Import Router
const userRouter = require("./router/user");
app.use("/", userRouter);

const commentRouter = require("./router/comment");
app.use("/", commentRouter);

const articleRouter = require("./router/article");
app.use("/article", articleRouter);

const apiRouter = require("./router/api");
app.use("/", apiRouter);

// const articleRouter = require("./router/article");
// app.use("/article", articleRouter);

// const test = require("./router/test");
// app.use("/test", test);
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

// Allow uploads

app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  try {
    res.status(200).send("Welcome To Nuntuim News Website");
  } catch (error) {
    res.status(err.status).json(error.message);
  }
});

module.exports = app;
