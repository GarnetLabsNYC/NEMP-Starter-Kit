const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  emailAddress: {
    type: String,
    required: true,
    unique: true
  },
  userName: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  authAdmin: Boolean
});

module.exports = User = mongoose.model("User", UserSchema);
