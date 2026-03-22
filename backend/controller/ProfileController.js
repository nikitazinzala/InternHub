const InternProfile = require("../models/InternProfile");

// CREATE
exports.createProfile = async (req, res) => {
  try {
    const { userId } = req.body;

    // 🔥 check before insert
    const existing = await InternProfile.findOne({ userId });

    if (existing) {
      return res.status(400).json({
        success: false,
        message: "Profile already exists. Please update instead."
      });
    }

    const profile = new InternProfile(req.body);
    const saved = await profile.save();

    res.status(201).json({
      success: true,
      data: saved
    });

  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// GET
exports.getProfile = async (req, res) => {
  try {
    const data = await InternProfile.findOne({ userId: req.params.userId });

    if (!data) return res.status(404).json({ message: "Not found" });

    res.json(data);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE
exports.updateProfile = async (req, res) => {
  try {
    const data = await InternProfile.findOneAndUpdate(
      { userId: req.params.userId },
      req.body,
      { new: true, runValidators: true }
    );

    res.json(data);

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE
exports.deleteProfile = async (req, res) => {
  try {
    await InternProfile.findOneAndDelete({ userId: req.params.userId });

    res.json({ message: "Deleted" });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};