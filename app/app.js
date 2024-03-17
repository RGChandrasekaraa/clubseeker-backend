const express = require("express");
const userRoutes = require("./routes/userRoutes");
const clubRoutes = require("./routes/clubRoutes");
const jwtUtils = require("./utils/jwt");

const app = express();

app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/clubs", clubRoutes);
app.get("/genToken", (req, res) => {
  const token = jwtUtils.generateToken("65f67b2f0136802e27145771");
  res.send(token);
});

module.exports = app;
