const clubCrud = require("../crud/clubCrud");

exports.createClub = async (req, res) => {
  try {
    const newClub = await clubCrud.createClub(req.body);
    res.status(201).json(newClub);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllClubs = async (req, res) => {
  // detect query params such as location, university, category
  const { location, university, category } = req.query;
  try {
    let conditions = {};
    if (location) {
      conditions.club_location = location;
    }
    if (university) {
      conditions.club_university = university;
    }
    if (category) {
      conditions.club_category = category;
    }
    const clubs = await clubCrud.findClubs(conditions);
    res.status(200).json(clubs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getClubById = async (req, res) => {
  try {
    const club = await clubCrud.findClub({ _id: req.params.clubId });
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
    const updatedClub = await clubCrud.updateClub(
      { _id: req.params.clubId },
      req.body
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
    const club = await clubCrud.deleteClub({ _id: req.params.clubId });
    if (!club) {
      return res.status(404).json({ message: "Club not found" });
    }
    res.status(200).json({ message: "Club deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
