const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const CommentSchema = Schema({
  _id: ObjectId,
  postedBy: { type: ObjectId, ref: "User" },
  content: String,
  articel: { type: ObjectId, ref: "Article" },
  likes: [{ type: ObjectId, ref: "User" }],
  created: { type: Date, default: Date.now },
  replies: [{ type: ObjectId, ref: "Reply" }],
});

const replySchema = Schema({
  postedBy: { type: ObjectId, ref: "User" },
  content: String,
  likes: [{ type: ObjectId, ref: "User" }],
  created: { type: Date, default: Date.now },
});
const Comment = mongoose.model("Comment", CommentSchema);

const Reply = mongoose.model("Reply", replySchema);

module.exports = { Comment, Reply };
