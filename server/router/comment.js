const express = require("express");
const router = express.Router();
const commentCont = require("../controllers/commentController");

router.route("/user/:_id/allcomments").get(commentCont.getAllComments);

router.route("/article/").post(commentCont.addComment);

module.exports = router;
