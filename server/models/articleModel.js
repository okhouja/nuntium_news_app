const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;

const ArticleSchema = new Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  description: {
    type: String,
  },
  url: {
    type: String,
  },
  source: {
    type: String,
  },
  image: {
    type: String,
  },
  category: {
    type: String,
  },
  languages: {
    type: String,
  },
  country: {
    type: String,
  },
  published_at: {
    type: String,
  },
});

module.exports = mongoose.model("Article", ArticleSchema);
