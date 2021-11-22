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
  const accessToken = req.headers.authorization.split(" ")[1];
  console.log(accessToken);
  if ((accessToken = "null")) {
    return res.json({ auth: false, message: "user not Authenticated!" });
  }
  try {
    const validToken = await verify(accessToken, process.env.TOKEN_TEXT);
    if (validToken) {
      return res
        .status(200)
        .json({ auth: true, message: "user is Authenticated" });
    } else {
      return res
        .status(404)
        .json({ auth: false, message: "You need to login!" });
    }
  } catch (err) {
    res.status(err.status).json({ auth: false, message: err.message });
  }
};

module.exports = { createToken, checkToken };
