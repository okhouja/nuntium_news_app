const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const articleSchema = Schema({
  _id: ObjectId,
  url: String,
  comments: [
    {
      user: {
        type: ObjectId,
        ref: "User",
      },
    },
  ],
  likes: [
    {
      user: {
        type: ObjectId,
        ref: "User",
      },
    },
  ],
  published_at: { type: Date, default: Date.now },
});

const Article = mongoose.model("Article", articleSchema);

module.exports = { Article };
