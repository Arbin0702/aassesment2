const express = require("express");
const validateUser = require("./validation");

const app = express();

app.use(express.json());

app.post("/users", validateUser, (req, res) => {
  res.status(200).json({ message: "User created successfully" });
});

module.exports = app;
