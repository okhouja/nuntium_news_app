// const Comment = require("../models/Comment");
// const User = require("../models/User");
const { Article } = require("../models/Articlel");
const mongoose = require("mongoose");
// const { User } = require("../models/User");
// const { createToken, checkToken } = require("../middleware/jwt");

const articleCtrl = {};

//                                              Get All Articles
articleCtrl.getAllArticle = async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).json(articles);
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

// Get all articles with categories
articleCtrl.getCategories = async (req, res) => {
  const categories = await Article.find({ categories: req.body.categories });
  try {
    if (categories) {
      return res.status(200).json({ categories });
    }
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

//                                   Check if the article exists

articleCtrl.checkArticle = async (req, res, next) => {
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

articleCtrl.getArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params._id).populate("comments");
    res.status(200).json(article);
  } catch (err) {
    res.status(err.message).json({ message: err.message });
  }
};

// Create Article

// articleCtrl.likeArticle = (req, res) => {
//   Article.findOne({ url: req.body.url })
//     .then((article) => {
//       if (article) {
//         console.log(article);
//         article.likes += 1;
//         article.save();
//         res.status(201).json({
//           message: "Your Like has been added successfully",
//           like,
//         });
//       } else {
//         const article = new Article({
//           _id: new mongoose.Types.ObjectId(),
//           url: req.body.url,
//           likes: 1,
//           comments: [],
//         });

//         article.save();

//         // after Auth
//         // User.findById(req.id)

//         User.findById(req.body.id).then((user) => {
//           user.likes += 1;
//           user.save();
//           res.status(201).json(user.likes);
//         });

//         res.status(201).json({ message: "Article has been saved" });
//       }
//     })

//     .catch((err) => {
//       res.status(400).json({ message: err.message });
//     });
// };

articleCtrl.addNewArticle = async (req, res) => {
  console.log(req.file);
  try {
    const newArticle = new Article({
      _id: new mongoose.Types.ObjectId(),
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      content: req.body.content,
      source: req.body.source,
      image: req.file.path,
      category: req.body.category,
      language: req.body.language,
      country: req.body.country,
    });
    await newArticle.save();
    res
      .status(201)
      .json({ message: "New Article has been added successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// update Article

articleCtrl.updateArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndUpdate(
      { _id: req.body._id },
      {
        title: req.body.title,
        author: req.body.author,
        description: req.params.description,
        content: req.body.content,
        source: req.body.source,
        image: req.file.path,
        category: req.body.category,
        language: req.body.language,
        country: req.body.country,
      },
      { new: true }
    );
    article.save();
    res
      .status(200)
      .json({ message: `The Article has been updated successfully` });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

// Delete Article

articleCtrl.deleteArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndDelete(req.params._id);
    res.status(200).json({
      message: `Article ${article.title} has been deleted successfully`,
    });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

/*

articleCtrl.createArticle = async (req, res) => {
  Article.findOne({ url: req.body.url }).then((article) => {
    if (!article) {
      const article = new Article({
        _id: new mongoose.Types.ObjectId(),
        url: req.body.url,
      });
      User.findById(req.body._id).then((user) => {
        article.save();
        user.articleCollection.push(article._id);
        user.save();
        res.status(200).json(article);
      });
    } else {
      Article.createArticle(req.body).then((article) => {
        User.findById(req.user._id).then((user) => {
          user.articleCollection.push(article._id);
          user.save();
          res.status(200).json(article);
        });
      });
    }
  });
};

*/

module.exports = articleCtrl;
