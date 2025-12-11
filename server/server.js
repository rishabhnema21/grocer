const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const userRoutes = require("./routes/user.route.js");
const sellerRoutes = require("./routes/seller.route.js");
const productRoutes = require("./routes/product.route.js")
const CartRoutes = require("./routes/cart.route.js")
const AddressRoutes = require("./routes/address.route.js")
const OrderRoutes = require("./routes/order.route.js")
const razorpayRoutes = require("./routes/razorpayPayment.route.js");
const connectDB = require("./configs/db.js");
const connectCloudinary = require("./configs/cloudinary.js");


const PORT = process.env.PORT || 8080;
const allowedOrigins = ["http://localhost:5173"]

connectDB();
connectCloudinary();

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowedOrigins, credentials: true}));

app.get("/", (req, res) => {
    res.send("app is running");
})

app.use("/api/user", userRoutes);
app.use("/api/seller", sellerRoutes);
app.use("/api/product", productRoutes);
app.use("/api/cart", CartRoutes);
app.use("/api/address", AddressRoutes);
app.use("/api/order", OrderRoutes);
app.use("/api/payment", razorpayRoutes);

app.listen(PORT, () => {
    console.log("app is listening to the port 8080");
})