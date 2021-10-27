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
// Create Article
articleCont.create = async (req, res) => {
  Article.findOne({ url: req.body.url })
    .then((article) => {
      if (article) {
        User.findById(req.user._id).then((user) => {
          user.articleCollection.push(article._id);
          user.save();
        });
      } else {
        Article.create(req.body).then((article) => {
          User.findById(req.params._id).then((user) => {
            user.articleCollection.push(article._id);
            user.save();
            res.status(200).json(article);
          });
        });
      }
    })
    .catch((err) => {
      res.status(err.status).json({ message: err.message });
    });
};

module.exports = articleCont;
