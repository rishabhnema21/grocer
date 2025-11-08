
// update user cart data : api/cart/update

const User = require("../models/user");

const updateCart = async (req, res) => {
    try {
        const userId = req.user.id;
        const { cartItems } = req.body;
        await User.findByIdAndUpdate(userId, { $set: { cartItems } });
        res.json( {success: true, message: "Cart Updated"} );
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }
}

module.exports = { updateCart }