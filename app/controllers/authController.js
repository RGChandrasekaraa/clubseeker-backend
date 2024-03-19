const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("../utils/jwt");

exports.registerUser = async (req, res) => {
  try {
    let password = req.body.user_password;
    password = await bcrypt.hash(password, 8);
    req.body.user_password = password;
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { user_email, user_password } = req.body;
    const user = await User.findOne({ user_email: user_email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(user_password, user.user_password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = await jwt.generateToken(user);
    res.status(200).json({
      token: token,
      message: "User logged in successfully",
      user_display_name: user.user_firstname,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.logoutUser = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(
      (token) => token.token !== req.token
    );
    await req.user.save();
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
