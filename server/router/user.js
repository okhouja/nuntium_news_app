const express = require("express");
const router = express.Router();
// const userController = require("../controllers/userController");

const {
  getUser,
  getAllUsers,
  addNewUser,
  updateProfile,
} = require("../controllers/userController");

// URL http://localhost:5000/user

router.route("/users").get(getAllUsers);

router.route("/user/:_id").get(getUser);

router.route("/signup").post(addNewUser);

router.route("/update/:_id").patch(updateProfile);

module.exports = router;
