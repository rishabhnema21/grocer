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
        res.json({success: false, message: error.message});
    }
}

module.exports = { authUser };