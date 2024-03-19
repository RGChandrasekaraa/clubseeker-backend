const mongoose = require("mongoose");

const clubSchema = new mongoose.Schema({
  club_name: { type: String, required: true },
  club_location: String,
  club_university: String,
  club_created: String,
  club_category: String,
  club_description: String,
  club_logo: String,
  club_facebook_url: String,
  club_discord_url: String,
  club_website_url: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  is_deleted: { type: Boolean, default: false },
  deleted_at: { type: Date },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Club", clubSchema);
