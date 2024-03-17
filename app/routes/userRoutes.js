const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.post("/", usersController.createUser);
router.get("/", usersController.getAllUsers);
router.get("/:userId", usersController.getUserById);
router.put("/:userId", usersController.updateUser);
router.delete("/:userId", usersController.deleteUser);
router.get("/:userId/clubs", usersController.getUserClubs);

module.exports = router;
