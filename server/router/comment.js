const express = require("express");
const router = express.Router();
const commentCont = require("../controllers/commentController");

router.route("/user/:_id/allcomments").get(commentCont.getAllComments);

router.route("/article/:_id").post(commentCont.addNewComment);

module.exports = router;
