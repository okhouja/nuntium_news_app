// Model (Schema)
const UserData = require("../models/userModel");

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

userController.addNewUser = async (req, res) => {
  const user = new UserData({
    username: req.body.username.toLowerCase(),
    password: req.body.password,
    email: req.body.email.toLowerCase(),
    country: req.body.country,
    city: req.body.city,
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

userController.getAllUsers = async (req, res) => {
  try {
    const users = await UserData.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

module.exports = userController;
