const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchma = Schema(
  {
    _id: mongoose.Types.ObjectId,
    username: {
      type: String,
      required: [true, "You need to enter a Username"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "You need to enter a Password"],
    },
    email: {
      type: String,
      require: [true, "You need to enter a Valid Email"],
      trim: true,
    },
    country: String,
    city: String,
    catogories: String,
    newletter: boolean,
    userAddedDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    comment: [commentSchema],
    fav: [{}],
  },

  { versionKey: false }
);

const User = mongoose.model("User", userSchma);
module.exports = User;
