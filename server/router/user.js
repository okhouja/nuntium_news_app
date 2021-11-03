const express = require("express");
const router = express.Router();
const userCont = require("../controllers/userCtrl");

// URL http://localhost:5000/user

router.route("/users").get(userCont.getAllUsers);

router.route("/user/:_id").get(userCont.checkUser);

router.route("/signup").post(userCont.addNewUser);

router.route("/user/update/:_id").patch(userCont.updateProfile);

router.route("/user/delete/:_id").delete(userCont.deleteUser);

module.exports = router;
