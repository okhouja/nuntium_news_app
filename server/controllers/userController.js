const UserData = require("../models/userModel");

const userController = {};

// Add new user
userController.addNewUser = async (req, res) => {
  const user = new UserData({
    userName: req.body.userName.toLowerCase(),
    userPass: req.body.userPass,
    email: req.body.email,
    country: req.body.country,
    city: req.body.city,
  });
};

// GET All Users
