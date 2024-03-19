const mongoose = require("mongoose");

const universitySchema = new mongoose.Schema({
  university_name: { type: String, required: true },
  university_location: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  is_deleted: { type: Boolean, default: false },
  deleted_at: { type: Date },
});

module.exports = mongoose.model("University", universitySchema);
