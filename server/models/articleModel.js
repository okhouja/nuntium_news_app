const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const articleSchema = new Schema({
  title: { type: String },
  author: { type: String },
  description: { type: String },
  url: { type: String },
  source: { type: String },
  image: { type: String },
  category: { type: String },
  languages: { type: String },
  country: { type: String },
  comments: [{ type: ObjectId, ref: "Comment" }],
  published_at: { type: Date },
});

module.exports = mongoose.model("Article", articleSchema);
