const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ObjectId = mongoose.Schema.Types.ObjectId;
const CommentSchema = new Schema({
  text: {
    type: String,
    required: "You need to write your comment",
  },
  articel: {
    type: ObjectId,
    ref: "Article",
  },
  likes: [
    {
      type: ObjectId,
      ref: "User",
    },
  ],
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
