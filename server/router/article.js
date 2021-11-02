const express = require("express");
const router = express.Router();
const articleCont = require("../controllers/articleCtrl");

// URL http://localhost:5000/article
router.route("/articles").get(articleCont.getAllArticle);

router.route("/article/:_id").get(articleCont.getArticle);

router.route("/article/like").post(articleCont.likeArticle);

module.exports = router;
