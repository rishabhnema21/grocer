const express = require("express");
const { authUser } = require("../middlewares/authUser");
const { placeOrderCOD, getUserOrders, getAllOrders } = require("../controllers/order.controller");
const { authSeller } = require("../middlewares/authSeller");
const router = express.Router();

router.post("/cod", authUser, placeOrderCOD);
router.get("/user", authUser, getUserOrders);
router.get("/all", authSeller, getAllOrders);

module.exports = router;