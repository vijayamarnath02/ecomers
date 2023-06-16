const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  Data: { type: Array, default: "0" }
}, { versionKey: false });

const User = mongoose.model("unsign", UserSchema);

module.exports = User;
