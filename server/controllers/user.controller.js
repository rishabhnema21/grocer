const User = require("../models/user.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register User : /api/user/register
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.json({success: false, message: "Missing Details"})
        }

        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.json({success: false, message: "User Already Exist"})
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({name, email, password: hashedPassword});

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET_KEY, {expiresIn: "7d"})

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
            maxAge: 7*24*60*60*1000,
        });

        return res.json({success: true, message: "User is Registered Successfully", user: {email: user.email, name: user.name} })

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: "error.message"})
    }
}

// user login - /api/user/login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({success: false, message: "Email and Password are required"});
        }
        const user = await User.findOne({email});
        if (!user) {
            return res.json({success: false, message: "Invalid email or password"});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.json({success: false, message: "Invalid email or password"});
        }

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET_KEY, {expiresIn: "7d"});

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
            maxAge: 7*24*60*60*1000,
        })

        res.json({success: true, message: "Login Successfull", user: {name: user.name, email: user.email}})

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }
}

// check auth: /api/user/is-auth
const isAuth = async(req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById( userId ).select("-password");
        
        return res.json({success: true, user});
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }
}

// logout user : /api/user/logout
const logout = async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",

        })

        return res.json({success: true, message: "Logged Out"});
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }
}

module.exports = { registerUser, loginUser, isAuth, logout }