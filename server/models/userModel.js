const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchma = Schema(
  {
    _id: mongoose.Types.ObjectId,
    username: {
      type: String,
      require: "You need to enter a Username",
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      require: "You need to enter a Password",
    },
    email: {
      type: String,
      require: "You need to enter a Valid Email",
    },
    country: String,
    city: String,
    newletter: boolean,
    comment: [commentSchema],
  },

  { versionKey: false }
);

const User = mongoose.model("User", userSchma);
module.exports = User;
