const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  path: {type:String , default: ""},
  Amount: {type:Number, default: 0},
  Pname :{type:String, default:""}

}, { versionKey: false });

const User = mongoose.model("product", UserSchema);

module.exports = User;  