const mongoose = require("mongoose");
// const userModel = require("userModel");

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "You need to write your comment",
  },
  likes: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
  reply: [
    {
      text: String,
      created: {
        type: Date,
        default: Date.now,
      },
      repliedBy: {
        type: mongoose.Schema.ObjectID,
        ref: "User",
      },
    },
  ],
  commentedBy: {
    type: mongoose.Schema.ObjectID,
    ref: "User",
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Comment", CommentSchema);
