// Model (Schema)
const UserModel = require("../models/userModel");
const mongoose = require("mongoose");

const userCont = {};

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

userCont.addNewUser = async (req, res) => {
  let cityVar = req.body.city;
  const user = new UserModel({
    _id: mongoose.Types.ObjectId(),
    username: req.body.username,
    password: req.body.password,
    email: req.body.email.toLowerCase(),
    country: req.body.country,
    city: cityVar.charAt(0).toUpperCase() + cityVar.slice(1).toLowerCase(),
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
    await user.save();
    res.status(201).json({
      message: `Your Profile ${user.username} has been created successfully`,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// GET All Users

userCont.getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

// Get User Profile
userCont.getUser = async (req, res) => {
  const user = await UserModel.findById(req.params._id);
  try {
    if (!user) {
      return res
        .status(404)
        .json({ message: "This profile does not yet exist." });
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    res.status(404).json({ message: "This profile does not exist." });
  }
};

// Update user information
userCont.updateProfile = async (req, res) => {
  let cityVar = req.body.city;
  try {
    const user = await UserModel.findByIdAndUpdate(
      { _id: req.params._id },

      {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        country: req.body.country,
        city: cityVar.charAt(0).toUpperCase() + cityVar.slice(1).toLowerCase(),
        general: req.body.general,
        business: req.body.business,
        entertainment: req.body.entertainment,
        health: req.body.health,
        science: req.body.science,
        sport: req.body.sport,
        technology: req.body.technology,
        newsletter: req.body.newsletter,
      },
      { new: true }
    );
    user.save();
    res
      .status(200)
      .json({ message: `Your Profile has been successfully updated.` });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

userCont.deleteUser = async (req, res) => {
  try {
    const user = await UserModel.findByIdAndDelete(req.params._id);
    res.status(200).json({
      message: `profile ${user.Profile} has been deleted successfully`,
    });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

module.exports = userCont;
