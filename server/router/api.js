const express = require("express");
const router = express.Router();
const apiCtrl = require("../controllers/apiCtrl");

// URL http://localhost:5000/test
router.route("/api/news/").get(apiCtrl.news);

module.exports = router;
