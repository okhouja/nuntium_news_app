const express = require("express");
const router = express.Router();
const articleCont = require("../controllers/articleController");

// URL http://localhost:5000/article
router.route("/articles").get(articleCont.getAllArticle);

router.route("/article/:_id").get(articleCont.getArticle);

router.route("/article/").post(articleCont.AddNewArticle);

module.exports = router;
