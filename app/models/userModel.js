const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_firstname: String,
  user_lastname: String,
  user_email: { type: String, unique: true, required: true },
  user_password: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  is_deleted: { type: Boolean, default: false },
  deleted_at: { type: Date },
});

module.exports = mongoose.model("User", userSchema);
