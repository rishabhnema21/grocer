const express = require("express");
const { registerUser, loginUser, isAuth, logout, userDetails } = require("../controllers/user.controller");
const { authUser } = require("../middlewares/authUser.js");
const router = express.Router();


// register user route
router.post("/register", registerUser);
// login user route
router.post("/login", loginUser);
router.get("/is-auth", authUser, isAuth)
router.get("/logout", authUser, logout)
router.get("/me", authUser, userDetails)

module.exports = router;