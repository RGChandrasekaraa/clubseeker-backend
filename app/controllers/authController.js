const bcrypt = require("../utils/passwordHandler");
const jwt = require("../utils/tokenHandler");
const userCrud = require("../crud/userCrud");

exports.registerUser = async (req, res) => {
  try {
    let password = req.body.user_password;
    password = await bcrypt.hashPassword(password);
    req.body.user_password = password;
    const record = await userCrud.findUser({ user_email: req.body.user_email });
    if (record) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = await userCrud.createUser(req.body);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { user_email, user_password } = req.body;
    const user = await userCrud.findUser({ user_email: user_email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.comparePassword(
      user_password,
      user.user_password
    );
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
