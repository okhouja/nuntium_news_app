const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const CommentSchema = Schema({
  _id: ObjectId,
  postedBy: { type: ObjectId, ref: "User" },
  content: String,
  articel: { type: ObjectId, ref: "Article" },
  likes: { type: Number, default: 0, ref: "User" },
  publishedAt: { type: Date, required: true, default: Date.now },
  replies: [{ type: ObjectId, ref: "Reply" }],
});

const replySchema = Schema({
  postedBy: { type: ObjectId, ref: "User" },
  content: String,
  likes: { type: Number, default: 0, ref: "User" },
  publishedAt: { type: Date, required: true, default: Date.now },
});
const Comment = mongoose.model("Comment", CommentSchema);

const Reply = mongoose.model("Reply", replySchema);

module.exports = { Comment, Reply };
