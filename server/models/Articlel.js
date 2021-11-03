const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const articleSchema = Schema({
  _id: ObjectId,
  url: String,
  comments: { type: ObjectId, ref: "Comment" },
  likes: { type: Number, default: 0 },
  published_at: { type: Date, default: Date.now },
});

const Article = mongoose.model("Article", articleSchema);

module.exports = { Article };
