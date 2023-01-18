const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profilePic: {
    type: String,
    required: false,
    default: "",
  },
  adminRoot: {
    type: Boolean,
    required: true,
    default: false,
  },
  isActivated: {
    type: Boolean,
    required: true,
    default: false,
  },
  activationLink: {
    type: String,
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema)