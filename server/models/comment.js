const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const replySchema = new Schema({
  postedBy: String,
  postedById: String,
  content: String,
  timestamp: { type: Date, default: Date.now },
});

const CommentSchema = new Schema({
  postedBy: String,
  postedById: String,
  content: String,
  likes: [
    {
      type: ObjectId,
      ref: "User",
    },
  ],
  replies: [replySchema],
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Comment", CommentSchema);
