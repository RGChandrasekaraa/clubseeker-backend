const express = require("express");
const userRoutes = require("./routes/userRoutes");
const clubRoutes = require("./routes/clubRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.options("*", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.send(200);
});

app.use(express.json({ limit: "50mb" }));
app.use("/api", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/clubs", clubRoutes);

module.exports = app;
