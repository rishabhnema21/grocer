// update user cart data : api/cart/update

const User = require("../models/user");

const updateCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const cartItemsObject = req.body.cartItems;

    const cartItemsArray = Object.keys(cartItemsObject).map((id) => ({
      productId: id,
      quantity: cartItemsObject[id],
    }));
    await User.findByIdAndUpdate(userId, { cartItems: cartItemsArray });
    res.json({ success: true, message: "Cart Updated" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

module.exports = { updateCart };
