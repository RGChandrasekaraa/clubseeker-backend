// app/middleware/auth.js
const jwtUtils = require("../utils/tokenHandler");

const auth = (req, res, next) => {
  const token = req.header("Authorization");
  //detect as a bearer token
  if (!token || !token.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }
  //remove bearer from token
  const authToken = token.split(" ")[1];
  try {
    const decoded_jwt = jwtUtils.verifyToken(authToken);
    req.user = decoded_jwt;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

module.exports = auth;
