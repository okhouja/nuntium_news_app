const mongoose = require("mongoose");
const userModel = require("userModel");

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "You need to write your comment",
  },
  likes: [{ type: mongoose.Schema.ObjectId, ref: "user" }],
});
