const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const articleSchema = Schema({
  _id: ObjectId,
  title: { type: String },
  author: { type: String },
  description: { type: String },
  content: { type: String },
  source: { type: String },
  image: { type: String },
  category: { type: String },
  language: { type: String },
  country: { type: String },
  comments: { type: ObjectId, ref: "Comment" },
  likes: { type: Number, default: 0 },
  published_at: { type: Date, default: Date.now },
});

const Article = mongoose.model("Article", articleSchema);

module.exports = { Article };
