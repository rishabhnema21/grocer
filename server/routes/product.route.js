const express = require("express");
const upload = require("../configs/multer");
const { authSeller } = require("../middlewares/authSeller");
const { addProduct, productList, productById, changeStock } = require("../controllers/product.controller");
const router = express.Router();

router.post("/add", upload.array("images"), authSeller, addProduct);

router.get("/list", productList);
router.get("/:id", productById);
router.post("/stock", authSeller, changeStock);

module.exports = router;