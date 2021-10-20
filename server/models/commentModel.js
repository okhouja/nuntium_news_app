const mongoose = require("mongoose");
// const userModel = require("userModel");

const ObjectId = mongoose.Schema.ObjectId;
const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "You need to write your comment",
  },
  artikel: {
    type: ObjectId,
    ref: "Artikel",
  },
  likes: [{ type: ObjectId, ref: "User" }],
  reply: [
    {
      text: String,
      created: {
        type: Date,
        default: Date.now,
      },
      repliedBy: {
        type: ObjectId,
        ref: "User",
      },
    },
  ],
  commentedBy: {
    type: ObjectId,
    ref: "User",
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Comment", CommentSchema);
