const Club = require("../models/clubModel");

exports.createClub = async (req, res) => {
  try {
    const newClub = new Club(req.body);
    await newClub.save();
    res.status(201).json(newClub);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllClubs = async (req, res) => {
  try {
    const clubs = await Club.find();
    res.status(200).json(clubs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getClubById = async (req, res) => {
  try {
    const club = await Club.findById(req.params.clubId);
    if (!club) {
      return res.status(404).json({ message: "Club not found" });
    }
    res.status(200).json(club);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateClub = async (req, res) => {
  try {
    const updatedClub = await Club.findByIdAndUpdate(
      req.params.clubId,
      req.body,
      { new: true }
    );
    if (!updatedClub) {
      return res.status(404).json({ message: "Club not found" });
    }
    res.status(200).json(updatedClub);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteClub = async (req, res) => {
  try {
    const club = await Club.findByIdAndDelete(req.params.clubId);
    if (!club) {
      return res.status(404).json({ message: "Club not found" });
    }
    res.status(200).json({ message: "Club deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
