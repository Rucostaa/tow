const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");

const { register, login, logout } = require("../controllers/authController");

router.post("/register", catchAsync(register));
router.post("/login", catchAsync(login));
router.get("/logout", catchAsync(logout));

module.exports = router;
