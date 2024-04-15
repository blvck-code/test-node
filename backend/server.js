require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todo");

const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use("/api/todo", todoRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, (req, res) => {
      console.log(`Running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error ==>>", err);
  });
