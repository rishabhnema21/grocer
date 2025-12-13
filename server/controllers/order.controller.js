// place order COD: /api/order/cod

const Order = require("../models/order");
const Product = require("../models/product");

const placeOrderCOD = async (req, res) => {
  try {
    const userId = req.user.id;
    const { items, addressId } = req.body;
    if (!items || items.length === 0) {
      return res.json({ success: false, message: "No items provided" });
    }

    if (!addressId) {
      return res.json({ success: false, message: "Address ID is required" });
    }

    // calculate amount

    let totalAmount = 0;
    for (const item of items) {
      const product = await Product.findById(item.productId);
      if (!product) continue;
      totalAmount += product.offerPrice * item.quantity;
    }
    totalAmount += Math.floor(totalAmount * 0.02);

    await Order.create({
      userId,
      items,
      totalAmount,
      addressId,
      paymentType: "Cash on Delivery",
    });
    res.json({ success: true, message: "Order Placed Successfully" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// get orders by user id : /api/order/user
const getUserOrders = async (req, res) => {
  try {
    const userId = req.user.id;
    const orders = await Order.find({
      userId,
      // $or: [{ paymentType: "Cash on Delivery" }, { isPaid: true }],
    })
      .populate("items.productId addressId")
      .sort({ createdAt: -1 });

    if (!orders.length) {
      return res.json({ success: true, message: "No orders found" });
    }

    res.json({ success: true, orders });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// get all orders for seller/admin: /api/order/seller
const getAllOrders = async (req, res) => {
  try {
    // res.set("Cache-Control", "no-store");
    const orders = await Order.find({
      // $or: [{ paymentType: "Cash on Delivery" }, { isPaid: true }],
    })
      .populate("items.productId addressId")
      .sort({ createdAt: -1 });

    if (!orders.length) {
      return res.json({ success: true, message: "No orders found" });
    }

    res.json({ success: true, orders });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

module.exports = { placeOrderCOD, getUserOrders, getAllOrders };
