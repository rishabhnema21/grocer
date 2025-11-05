const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const userRoutes = require("./routes/user.route.js");
const sellerRoutes = require("./routes/seller.route.js");
const connectDB = require("./configs/db.js");
dotenv.config();

const PORT = process.env.PORT || 8080;
const allowedOrigins = ["https://localhost:5174"]

connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowedOrigins, credentials: true}));

app.get("/", (req, res) => {
    res.send("app is running");
})

app.use("/api/user", userRoutes);
app.use("/api/user", sellerRoutes);

app.listen(PORT, () => {
    console.log("app is listening to the port 8080");
})