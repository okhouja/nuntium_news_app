const { sign, verify } = require("jsonwebtoken");

const createToken = (user) => {
  const accessToken = sign(
    { username: user.username, id: user._id },
    process.env.TOKEN_TEXT,
    {
      // in 600 second = 10 min will be expire
      expiresIn: 600,
    }
  );

  return accessToken;
};
const checkToken = (req, res, next) => {
  console.log(req.headers.authorization);
};

module.exports = { createToken, checkToken };
