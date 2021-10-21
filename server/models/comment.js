const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const replySchema = new Schema(
  {
    postedBy: [{ type: ObjectId, ref: "User" }],
    content: String,
    likes: [{ type: ObjectId, ref: "User" }],
  },
  { timestamp: true }
);

const CommentSchema = new Schema(
  {
    postedBy: [{ type: ObjectId, ref: "User" }],
    // postedById: String,
    content: String,
    articel: { type: ObjectId, ref: "Article" },
    likes: [{ type: ObjectId, ref: "User" }],
    replies: [replySchema],
  },
  { timestamp: true }
);

module.exports = mongoose.model("Comment", CommentSchema);
