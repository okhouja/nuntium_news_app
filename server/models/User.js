const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = Schema(
  {
    _id: Schema.Types.ObjectId,
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
      require: [true, "You need to enter a Email Address"],
      trim: true,
      lowercase: true,
      unique: [true, "Email already exists"],
      match: [/.+\@.+\..+/, "Please fill a valid email address"],
    },
    country: String,
    city: {
      type: String,
      required: [true, "You need to enter your City"],
      trim: true,
    },
    general: Boolean,
    business: Boolean,
    entertainment: Boolean,
    health: Boolean,
    science: Boolean,
    sport: Boolean,
    technology: Boolean,
    newsletter: Boolean,
    articleCollection: [{ type: Schema.Types.ObjectId, ref: "Article" }],
    registerDate: { type: Date, required: true, default: Date.now },
  },
  { versionKey: false }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
