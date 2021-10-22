const express = require("express");
const router = express.Router();
const userCont = require("../controllers/userController");

// URL http://localhost:5000/user

router.route("/users").get(userCont.getAllUsers);

router.route("/user/:_id").get(userCont.getUser);

router.route("/signup").post(userCont.addNewUser);

router.route("/update/:_id").patch(userCont.updateProfile);

module.exports = router;
