const Comment = require("../models/comment");
const User = require("../models/userModel");
const Article = require("../models/articleModel");
const mongoose = require("mongoose");

const articleCont = {};

//                                              Get All Articles
articleCont.getAllArticle = async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).json(articles);
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

//                                   Check if the article exists

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

// Get Article

articleCont.getArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params._id).populate(
      "commentCollection"
    );
    res.status(200).json(article);
  } catch (err) {
    res.status(err.message).json({ message: err.message });
  }
};
// Add new Article
articleCont.addNewArticle = async (req, res) => {};

module.exports = articleCont;
