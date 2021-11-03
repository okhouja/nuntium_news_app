const express = require("express");
const router = express.Router();
const commentCont = require("../controllers/commentCtrl");

router.route("/user/:_id/allcomments").get(commentCont.getAllComments);

router.route("/article/").post(commentCont.addNewComment);

module.exports = router;
