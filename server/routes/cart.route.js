const express = require("express");
const { authUser } = require("../middlewares/authUser.js");
const { updateCart } = require("../controllers/cart.controller.js");
const router = express.Router();

router.post("/update", authUser, updateCart);

module.exports = router;