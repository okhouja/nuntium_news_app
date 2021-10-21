const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema(
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
    userAddedDate: { type: Date, required: true, default: Date.now },
    //commentCollection: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    likes: [],
  },
  { timestamp: true },
  { versionKey: false }
);

UserSchema.set("toJSON", {
  transform: function (doc, ret) {
    // remove the password property when serializing doc to JSON
    delete ret.password;
    return ret;
  },
});

module.exports = mongoose.model("User", UserSchema);
