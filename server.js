require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 9000;
const morgan = require("morgan");
const cors = require("cors");

app.use(cors());
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Bookmarkd");
});

app.get("/bookmarks", (req, res) => {
  res.json(bookmarks);
});

app.listen(PORT, () => console.log("Server is running on port", PORT));
