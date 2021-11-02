const { Comment } = require("../models/Comment");
//const User = require("../models/userModel");

const { Article } = require("../models/Articlel");
const mongoose = require("mongoose");
const { User } = require("../models/User");

const commentCont = {};

// Check user Profile

// commentCont.checkUser = async (req, res, next) => {
//   const user = await User.findById(req.params.id);
//   try {
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//   } catch (err) {
//     res.status(err.status).json({ message: err.message });
//   }
//   req.author = author;
//   next();
// };

// Get All Comments for All users Profile

// for future  get commnets for one article
commentCont.getAllComments = async (req, res) => {
  try {
    const comment = await Comment.find();
    res.status(200).json(comment);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

// Add new comments

commentCont.addNewComment = async (req, res) => {
  const comment = new Comment({
    _id: new mongoose.Types.ObjectId(),
    postedBy: req.body.username,
    content: req.body.content,
  });
  await comment.save();
  Article.findOne({ url: req.body.url })
    .then((article) => {
      if (article) {
        console.log(article);
        article.comments.push(comment._id);
        article.save();
        res.status(201).json({
          message: "Your comment has been added successfully",
          comment,
        });
      } else {
        const article = new Article({
          _id: new mongoose.Types.ObjectId(),
          url: req.body.url,
        });

        article.comments.push(comment._id);
        article.save();

        res.status(201).json({ message: "Article has been saved" });
      }
    })

    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};
commentCont.saveComment = async (req, res) => {
  const user = await User.findById(req.params.id);
  const newComment = new Comment({
    _id: new mongoose.Types.ObjectId(),
    postedBy: user.username,
    content: req.body.content,
    user: req.user.id,
  });
  const comment = await newComment.save;
  const newarticle = new Article({
    _id: new mongoose.Types.ObjectId(),
    url: req.body.url,
  });
  const article = await Article.findOne({ url: req.body.url });
  comment
    .then((user) => {})
    .catch((err) => {
      res.status(err.status).json({ message: err.message });
    });
};

// commentCont.addlike = async (req, res) => {
//   const like = new Comment({
//     _id: new mongoose.Types.ObjectId(),
//     postedBy: req.body.username,
//     like: req.body.like,
//   });
//   Comment.findById(req.body._id)
//     .then((article) => {
//       if(article){
//         console.log(article);
//         article.
//       }
//     })

//     .catch((err) => {
//       res.status(400).json({ message: err.message });
//     });
// };
/*
commentCont.addComment = async (req, res) => {
  Comment.createArticle(req.body.comment)
    .then((comment) => {
      Article.findById(req.params._id)
        .populate("comment")
        .then((article) => {
          article.comments.push(comment._id);
          article.save();
          res.status(201).json(article);
        });
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

commentCont.addReply = async (req, res) => {
  Comment.findById(req.params._id)
    .then((comment) => {
      comment;
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};
// Add Replay to comment

// Get
*/
module.exports = commentCont;
