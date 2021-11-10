const express = require("express");
const router = express.Router();
const articleCtrl = require("../controllers/articleCtrl");

// URL http://localhost:5000/article
router.route("/articles").get(articleCtrl.getAllArticle);

router.route("/article/:_id").get(articleCtrl.getArticle);

router.route("/article/like").post(articleCtrl.likeArticle);

module.exports = router;
