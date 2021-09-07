const express = require("express");

const { signup, login } = require("../controllers/auth.js");

const router = express.Router();

//both must be post router because they have to send a payload
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
