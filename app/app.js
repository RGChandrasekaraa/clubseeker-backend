const express = require("express");
const userRoutes = require("./routes/userRoutes");
const clubRoutes = require("./routes/clubRoutes");
const authRoutes = require("./routes/authRoutes");
const university = require("./models/universityModel");
const jwtUtils = require("./utils/jwt");

const app = express();
// handle CORS issue

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
app.get("/genToken", (req, res) => {
  const token = jwtUtils.generateToken("65f67b2f0136802e27145771");
  res.send(token);
});

app.get("/api/universities/insert", async (req, res) => {
  const universities = [
    {
      university_name: "University of Lagos",
      university_location: "Lagos",
    },
    {
      university_name: "University of Ibadan",
      university_location: "Ibadan",
    },
    {
      university_name: "Obafemi Awolowo University",
      university_location: "Ile-Ife",
    },
    {
      university_name: "Ahmadu Bello University",
      university_location: "Zaria",
    },
    {
      university_name: "University of Nigeria, Nsukka",
      university_location: "Nsukka",
    },
    {
      university_name: "Federal University of Technology, Minna",
      university_location: "Minna",
    },
    {
      university_name: "University of Ilorin",
      university_location: "Ilorin",
    },
    {
      university_name: "University of Benin",
      university_location: "Benin City",
    },
    {
      university_name: "University of Port Harcourt",
      university_location: "Port Harcourt",
    },
    {
      university_name: "University of Jos",
      university_location: "Jos",
    },
    {
      university_name: "University of Maiduguri",
      university_location: "Maiduguri",
    },
    {
      university_name: "University of Calabar",
      university_location: "Calabar",
    },
    {
      university_name: "University of Uyo",
      university_location: "Uyo",
    },
    {
      university_name: "University of Abuja",
      university_location: "Abuja",
    },
    {
      university_name: "Nnamdi Azikiwe University",
      university_location: "Awka",
    },
    {
      university_name: "Bayero University Kano",
      university_location: "Kano",
    },
    {
      university_name: "Federal University of Technology, Owerri",
      university_location: "Owerri",
    },
    {
      university_name: "Federal University, Ndufu-Alike",
      university_location: "Ndufu-Alike",
    },
    {
      university_name: "Federal University, Oye-Ekiti",
      university_location: "Oye-Ekiti",
    },
    {
      university_name: "Federal University, Dutse",
      university_location: "Dutse",
    },
    {
      university_name: "Federal University, Lokoja",
      university_location: "Lokoja",
    },
    {
      university_name: "Federal University, Kashere",
      university_location: "Kashere",
    },
    {
      university_name: "Federal University, Wukari",
      university_location: "Wukari",
    },
    {
      university_name: "Federal University, Dutsin-Ma",
      university_location: "Dutsin-Ma",
    },
    {
      university_name: "Federal University, Birnin Kebbi",
      university_location: "Birnin Kebbi",
    },
    {
      university_name: "Federal University, Gusau",
      university_location: "Gusau",
    },
    {
      university_name: "Federal University, Gashua",
      university_location: "Gashua",
    },
    {
      university_name: "Federal University, Lafia",
      university_location: "Lafia",
    },
    {
      university_name: "Federal University, Lafia",
      university_location: "Lafia",
    },
    {
      university_name: "Federal University, Otuoke",
      university_location: "Otuoke",
    },
    {
      university_name: "Federal University, Wukari",
      university_location: "Wukari",
    },
    {
      university_name: "Federal University, Dutsin-Ma",
      university_location: "Dutsin-Ma",
    },
    {
      university_name: "Federal University, Birnin Kebbi",
      university_location: "Birnin Kebbi",
    },
    {
      university_name: "Federal University, Gusau",
      university_location: "Gusau",
    },
    {
      university_name: "Federal University, Gashua",
      university_location: "Gashua",
    },
    {
      university_name: "Federal University, Lafia",
      university_location: "Lafia",
    },
    {
      university_name: "Federal University, Lafia",
      university_location: "Lafia",
    },
    {
      university_name: "Federal University, Otuoke",
      university_location: "Otuoke",
    },
    {
      university_name: "Federal University, Wukari",
      university_location: "Wukari",
    },
    {
      university_name: "Federal University, Dutsin-Ma",
      university_location: "Dutsin-Ma",
    },
    {
      university_name: "Federal University, Birnin Kebbi",
      university_location: "Birnin Kebbi",
    },
    {
      university_name: "Federal University, Gusau",
      university_location: "Gusau",
    },
    {
      university_name: "Federal University, Gashua",
      university_location: "Gashua",
    },
  ];
  try {
    const result = await university.insertMany(universities);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = app;
