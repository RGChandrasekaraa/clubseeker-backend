const express = require("express");
const userRoutes = require("./routes/userRoutes");
const clubRoutes = require("./routes/clubRoutes");
const authRoutes = require("./routes/authRoutes");
const jwtUtils = require("./utils/jwt");

const app = express();
// handle CORS issue

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(express.json({ limit: "50mb" }));
app.use("/api", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/clubs", clubRoutes);
app.get("/genToken", (req, res) => {
  const token = jwtUtils.generateToken("65f67b2f0136802e27145771");
  res.send(token);
});

module.exports = app;
