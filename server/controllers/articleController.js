const Comment = require("../models/comment");
const User = require("../models/userModel");
const Article = require("../models/articleModel");
const mongoose = require("mongoose");

const articleCont = {};

articleCont.getAllArticle = async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).json(articles);
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

articleCont.checkArticle = async (req, res, next) => {
  const article = await Article.findById(req.params._id);
  try {
    if (!article) {
      return res.status(404).json({ message: "Article Not Found" });
    }
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
  req.article = article;
  next();
};

module.exports = articleCont;
