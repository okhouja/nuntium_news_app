// Model (Schema)
const UserModel = require("../models/userModel");
const mongoose = require("mongoose");

const userController = {};

// Add new user

/* {
  "username":"Omar",
  "password":"123456",
  "email":"omar@dci.com",
  "country":"germany",
  "city":"Hamburg",
  "general":true,
  "business":true,
  "entertainment":true,
  "health":false,
  "science":true,
  "sport":true,
  "technology":true,
  "newsletter":false

} 
*/

const addNewUser = async (req, res) => {
  let city = req.body.city;
  const user = new UserModel({
    _id: mongoose.Types.ObjectId(),
    username: req.body.username,
    password: req.body.password,
    email: req.body.email.toLowerCase(),
    country: req.body.country,
    city: city.charAt(0).toUpperCase() + city.slice(1).toLowerCase(),
    general: req.body.general,
    business: req.body.business,
    entertainment: req.body.entertainment,
    health: req.body.health,
    science: req.body.science,
    sport: req.body.sport,
    technology: req.body.technology,
    newsletter: req.body.newsletter,
  });
  try {
    const newUser = await user.save();
    console.log(newUser);
    res.status(201).json({
      message: "New user has been created successfully",
      newUser,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// GET All Users

const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

// Get User Profile
const getUser = async (req, res) => {
  const user = await UserModel.findOne({ _id: req.params.id });
  try {
    return res.status(200).json(user);
    // if (!user) {
    //   return res.status(404).json({ message: "User not found" });
    // } else {

    // }
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

// Update user information
const updateProfile = async (req, res) => {
  try {
    await UserModel.findByIdAndUpdate(
      { username: req.params.username },
      {
        $set: {
          password: req.body.password,
          email: req.body.email,
          country: req.body.country,
          city: city.charAt(0).toUpperCase() + city.slice(1).toLowerCase(),
          general: req.body.general,
          business: req.body.business,
          entertainment: req.body.entertainment,
          health: req.body.health,
          science: req.body.science,
          sport: req.body.sport,
          technology: req.body.technology,
          newsletter: req.body.newsletter,
        },
      }
    );
    res
      .status(200)
      .json({ message: "Your Profile has been successfully updated." });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

module.exports = { addNewUser, getUser, getAllUsers, updateProfile };
