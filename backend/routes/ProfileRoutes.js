const express = require("express");
const router = express.Router();

const {
  createProfile,
  getProfile,
  updateProfile,
  deleteProfile
} = require("../controller/ProfileController");

router.post("/", createProfile);
router.get("/:userId", getProfile);
router.put("/:userId", updateProfile);
router.delete("/:userId", deleteProfile);

module.exports = router;