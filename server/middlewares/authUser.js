const jwt = require("jsonwebtoken");

const authUser = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) return res.json({success: false, message: "Not Authorized"});

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if (tokenDecode.id) {
            req.user = {id: tokenDecode.id };
        } else {
            return res.json({success: false, message: "Not Authorized"});
        }
        next();

    } catch(error) {
        console.log(error.message); 
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }
}

module.exports = { authUser };