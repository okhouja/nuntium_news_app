const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));

app.route("./").get;

module.exports = app;
