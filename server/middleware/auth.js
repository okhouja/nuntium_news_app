const User = require("../models/User");

const allowedAccess = {};
allowedAccess.roleCheck = (req, res, next) => {
  if (req.cookie.role !== "ADMIN") {
    return res
      .status(401)
      .send(`You are not allowed to access <br> <a href='/'>Home</a>`);
  }
  next();
};
allowedAccess.allowedtoDelete = async (req, res, next) => {
  const id = req.params.id;
  if (req.cookie.role == "ADMIN" || req.cookie.user_id == id) {
    next();
  } else {
    return res
      .status(401)
      .send("You are not authorized <br> <a href='/'>Home</a> ");
  }
};
allowedAccess.allowToView = async (req, res, next) => {
  const username = req.params.name;
  const user = await User.fineOne({ username });
  if (req.cookies.role == "ADMIN" || req.cookies.user_id == user.id) {
    next();
  } else {
    return res
      .status(401)
      .send("You are not authorized <br> <a href='/'>Home</a>");
  }
};
