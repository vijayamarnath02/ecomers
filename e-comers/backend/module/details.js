const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: {type:String, default:""},
  password:{type: String, default: ""},
  mobile:{type: Number, default: ""},
  confirmpassword:{type: String, default: ""},
  email:{type: String, default: ""}
}, { versionKey: false });

const User = mongoose.model("details", UserSchema);

module.exports = User;  