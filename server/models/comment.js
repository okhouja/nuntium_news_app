const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const replySchema = new Schema({
  postedBy: [{ type: ObjectId, ref: "User" }],
  content: String,
  likes: [{ type: ObjectId, ref: "User" }],
  publishedAt: [{ type: Date, required: true, default: Date.now }],
});

const CommentSchema = new Schema({
  postedBy: { type: ObjectId, ref: "User" },
  content: String,
  articel: { type: ObjectId, ref: "Article" },
  likes: { type: ObjectId, ref: "User" },
  publishedAt: { type: Date, required: true, default: Date.now },
  replies: [replySchema],
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
