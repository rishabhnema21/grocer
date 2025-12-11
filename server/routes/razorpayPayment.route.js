const express = require("express");
const { authUser } = require("../middlewares/authUser");
const { createRazorpayOrder, verifyRazorpayPayment } = require("../controllers/razorpayPayment.controller");
const router = express.Router();

router.post("/create-order", authUser, createRazorpayOrder);
router.post("/verify", authUser, verifyRazorpayPayment);

module.exports = router;