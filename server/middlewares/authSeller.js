const jwt = require("jsonwebtoken");

const authSeller = async (req, res) => {
    const { sellerToken } = req.cookies;
    if (!sellerToken) {
        return res.json({success: false, message: "Not Authorized"});
    }

    try {
        const tokenDecode = jwt.verify(sellerToken, process.env.JWT_SECRET_KEY);
        if (tokenDecode.email == process.env.SELLER_EMAIL) {
            next();
        } else {
            return res.json({success: false, message: "Not Authorized"});
        }

    } catch (error) {
        res.json({success: false, message: error.message}); 

    }
}

module.exports = { authSeller }