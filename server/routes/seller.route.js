const express = require("express");
const { sellerLogin, isSellerAuth, sellerLogout } = require("../controllers/seller.controller.js");
const { authSeller } = require("../middlewares/authSeller.js");
const router = express.Router();

router.post("/login", sellerLogin);
router.get("/is-auth", authSeller, isSellerAuth);
router.get("/logout", sellerLogout);

module.exports = router;