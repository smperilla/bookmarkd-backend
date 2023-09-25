const express = require("express");
const router = express.Router();
const Bookmark = require("../models/Bookmark");

//INDUCES

//INDEX
router.get("/", async (req, res) => {
    try {
        res.json(await Bookmark.find());
    } catch (error) {
        res.status(400).json(error);
    }
});

//CREATE

router.post("/",async (req, res) => {
    try {
        res.json(await Bookmark.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;

