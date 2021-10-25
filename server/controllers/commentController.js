const CommentData = require("../models/commentModel");
const User = require("../models/userModel");
const mongoose = require("mongoose");

const commentCont = {};

// Check user

commentCont.checkUser = async (req, res, next) => {
  const user = await User.findById(req.params._id);
  try {
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
  req.author = author;
  next();
};

commentController.addNewComment = async (req, res) => {
  const comment = new CommentData({
    user: req.user.id,
    text: req.body.text,
    aricle: req.body.article,
  });
  try {
    const newComment = await comment.save();
    console.log(newComment);
    res.status(200).json({
      message: "Your comment has been added successfully",
      newComment,
    });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};
