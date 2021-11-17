const { sign, verify } = require("jsonwebtoken");

const createToken = (user) => {
  const accessToken = sign(
    { username: user.username, id: user._id },
    process.env.TOKEN_TEXT
  );
  return accessToken;
};
const checkToken = (req, res, next) => {};

module.exports = { createToken, checkToken };
