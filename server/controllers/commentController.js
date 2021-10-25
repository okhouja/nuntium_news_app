const Comment = require("../models/commentModel");
const User = require("../models/userModel");
const mongoose = require("mongoose");

const commentCont = {};

// Check user

commentCont.checkUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);
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

// Get All Comments for All users
commentCont.getAllComments = async (req, res) => {
  try {
    const comment = await Comment.find();
    res.status(200).json(comment);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

commentCont.addNewComment = async (req, res) => {
  User.findById(req.params.id).then((user) => {
    if (user) {
      const comment = new Comment({
        _id: new mongoose.Types.ObjectId(),
        postedBy: req.params.id,
        content: req.body.content,
      });
      comment.save();
      user.comments.push(comment);
      user.save();
      res
        .status(201)
        .json({ message: "Your comment has been added successfully" });
    } else {
      return res.status(404).json({ message: "User Not Found" });
    }
  });

  const comment = new Comment({
    postedBy: req.params.id,
    content: req.body.content,
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
