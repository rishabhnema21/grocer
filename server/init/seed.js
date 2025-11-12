require("dotenv").config();
const connectDB = require("../configs/db.js");
const path = require("path");
const {v2: cloudinary} = require("cloudinary");
const connectCloudinary = require("../configs/cloudinary.js")
const Product = require("../models/product.js")
const products = require("./productData.js");

connectDB();
connectCloudinary();

const seedProducts = async () => {
    try {
        await Product.deleteMany({});

        for (const product of products) {

            const imagePaths = product.images.map((img) => path.join(__dirname, "../public", img));

            const uploadPromises = imagePaths.map((imgPath) => cloudinary.uploader.upload(imgPath, {folder: "grocery_products"}));

            const results = await Promise.all(uploadPromises);
            product.images = results.map((r) => r.secure_url);

            await Product.create(product);
            console.log(`Added ${product.name}`)
        }

        console.log("All products uploaded");
        process.exit(0);
    } catch(error) {
        console.error("❌ Seeding failed:", error);
        process.exit(1);
    }
}

seedProducts();