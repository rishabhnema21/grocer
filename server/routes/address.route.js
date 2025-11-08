const express = require("express");
const { authUser } = require("../middlewares/authUser");
const { addAddress, getAddress } = require("../controllers/address.controller");
const router = express.Router();

router.post("/add", authUser, addAddress)
router.get("/all", authUser, getAddress)

module.exports = router;