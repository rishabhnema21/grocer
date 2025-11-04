const express = require("express");
const { registerUser, loginUser } = require("../controllers/user.controller");
const router = express.Router();


// register user route
router.post("/register", registerUser);
// login user route
router.post("/login", loginUser);

module.exports = router;