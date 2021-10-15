const express = require("express");
const router = express.Router();
const articleController = require("../controllers/api");

// URL http://localhost:5000/article
router.route("/").get(articleController.news);

module.exports = router;
