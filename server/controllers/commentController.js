const CommentData = require("../models/commentModel");

const commentController = {};

commentController.addNewComment = async (req, res) => {
  const comment = new CommentData({
    user: user.id,
    text,
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
