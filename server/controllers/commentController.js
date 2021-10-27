const Comment = require("../models/comment");
const User = require("../models/userModel");
const mongoose = require("mongoose");

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

commentCont.addNewComment = async (req, res) => {
  User.findById(req.params._id)
    .then((user) => {
      if (user) {
        console.log(user);
        const comment = new Comment({
          _id: new mongoose.Types.ObjectId(),
          postedBy: req.params._id,
          content: req.body.content,
        });
        comment.save();
        user.commentCollection.push(comment._id);
        user.save();
        res.status(201).json({
          message: "Your comment has been added successfully",
          comment,
        });
      } else {
        return res.status(404).json({ message: "User Not Found" });
      }
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

module.exports = commentCont;
