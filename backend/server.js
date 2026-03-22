const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const profileRoutes = require("./routes/ProfileRoutes");
app.use("/api/profile", profileRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/InternHub")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});