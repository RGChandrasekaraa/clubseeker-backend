const express = require("express");
const router = express.Router();
const clubsController = require("../controllers/clubsController");
const auth = require("../middleware/auth");

router.post("/", auth, clubsController.createClub);
router.get("/", clubsController.getAllClubs);
router.get("/:clubId", clubsController.getClubById);
router.put("/:clubId", auth, clubsController.updateClub);
router.delete("/:clubId", auth, clubsController.deleteClub);

module.exports = router;
