const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  Pname: { type: String, default: "" },
  Amount: { type: Number, default: 0 },
  Count: { type: Number, default: 0 }
}, { versionKey: false });

const User = mongoose.model("temp", UserSchema);

module.exports = User;
