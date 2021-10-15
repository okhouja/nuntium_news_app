const express = require("express");
const router = express.Router();
const makeRequest = require("../controllers/apiClient");

// URL http://localhost:5000/test
router.route("/").get(makeRequest);

module.exports = router;
