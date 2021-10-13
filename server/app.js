const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));

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

app.route("/").get;

module.exports = app;
