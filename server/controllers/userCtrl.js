// Model (Schema)
const { User } = require("../models/User");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const Session = require("../models/session");
const uuid = require("uuid").v4;

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
  const userCheck = await User.findOne({ username: req.body.username });
  if (userCheck) {
    return res.status(400).send("This user is already exists.");
  }
  req.session.done = true;
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log(hashedPassword);
    let cityVar = req.body.city;
    const newuser = new User({
      _id: mongoose.Types.ObjectId(),
      username: req.body.username,
      password: hashedPassword,
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

    await newuser.save();
    res.status(201).json({
      message: `Your Profile ${newuser.username} has been created successfully`,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Login
// userCont.login = async (req, res) => {
//   const user = await User.findOne({ username: req.body.username });
//   if (!user) {
//     return res.status(400).send("username not Found");
//   }
//   try {
//     if (await bcrypt.compare(req.body.password, user.password)) {
//       res.send(`Welcome Back ${user.username}`);
//     } else {
//       res.json({ loginSuccess: false, message: "Wrong Password, try again." });
//     }
//   } catch (err) {
//     res.status(err.status).json({ message: err.message });
//   }
// };

userCont.login = async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user) {
    return res.status(404).send(`Unfortunately an error has occurred.
      The username or password are not entered correctly. Please try again. If an account has not yet been created, please click on "Register"`);
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send(`Welcome Back ${user.username}!`);
    } else {
      res.send(`Unfortunately an error has occurred.
        The username or password are not entered correctly. Please try again. If an account has not yet been created, please click on "Register"`);
    }
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

// GET All Users

userCont.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

// Get User Profile
userCont.checkUser = async (req, res, next) => {
  const user = await User.findById(req.params._id);
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
  req.user = user;
  next();
};

userCont.getOneUser = async (req, res) => {
  try {
    const user = await User.findById(req.params._id).populate(
      "commentCollection",
      "articleCollection"
    );
    res.status(200).json(user);
    // res.status(200).json({
    //   message: `${user.username} has ${user.commentCollection.length} commentCollection`,
    //   comments: user.comment.map((comment) => comment.content).join(", "),
    // });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

// Update user information
userCont.updateProfile = async (req, res) => {
  const userCheck = await User.findOne({ username: req.body.username });
  if (userCheck) {
    return res.status(400).send("This username is already exists.");
  }

  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    let cityVar = req.body.city;
    const user = await User.findByIdAndUpdate(
      { _id: req.params._id },

      {
        username: req.body.username,
        password: hashedPassword,
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
    const user = await User.findByIdAndDelete(req.params._id);
    res.status(200).json({
      message: `profile ${user.Profile} has been deleted successfully`,
    });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

//

module.exports = userCont;
