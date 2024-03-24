const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const auth = require("../middleware/auth");

router.post("/", auth, usersController.createUser);
router.get("/", usersController.getAllUsers);
router.get("/:userId", usersController.getUserById);
router.put("/:userId", auth, usersController.updateUser);
router.delete("/:userId", auth, usersController.deleteUser);
router.get("/:userId/clubs", auth, usersController.getUserClubs);

module.exports = router;
