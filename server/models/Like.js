const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const likeSchema = Schema(
  {
    userID: {
      type: ObjectId,
      ref: "User",
    },
    commentID: {
      type: ObjectId,
      ref: "Comment",
    },
    articleId: {
      type: ObjectId,
      ref: "Article",
    },
  },
  { timestamp: true }
);

const Like = mongoose.model("Like", likeSchema);
module.exports = { Like };
