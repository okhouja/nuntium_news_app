const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reqStrMax = {
  type: String,
  required: [true, "You need "],
};
const UserSchema = new Schema(
  {
    _id: mongoose.Types.ObjectId,
    username: {
      type: String,
      required: [true, "You need to enter a Username"],
      unique: true,
      trim: true,
      max: [30, "Your username is too long, Max is 30 characters"],
    },
    password: {
      type: String,
      required: [true, "You need to enter a Password"],
      max: [50, "Your Password is too long."],
    },
    email: {
      type: String,
      require: [true, "You need to enter a Email Address"],
      trim: true,
      unique: "Email already exists",
      match: [/.+\@.+\..+/, "Please enter a valid Email Address"],
    },
    country: String,
    city: {
      type: String,
      required: [true, "You need to enter your City"],
      trim: true,
      max: [30, "Your City name is too long."],
    },
    general: Boolean,
    business: Boolean,
    entertainment: Boolean,
    health: Boolean,
    science: Boolean,
    sport: Boolean,
    technology: Boolean,
    newsletter: Boolean,
    userAddedDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    // comment: [commentSchema],
    likes: [],
  },

  { versionKey: false }
);

module.exports = mongoose.model("User", UserSchema);
