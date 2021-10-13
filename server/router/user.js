const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// URL http://localhost:5000/user
router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.addNewUser);

module.exports = router;
