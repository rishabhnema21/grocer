const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
  }],
  totalAmount: { type: Number, required: true },
  addressId: { type: mongoose.Schema.Types.ObjectId, ref: "Address", required: true },
  status: { type: String, default: "Order Placed" },
  paymentType: { type: String, required: true },
  isPaid: { type: Boolean, default: false },
}, { timestamps: true });


const Order = mongoose.model("Order", orderSchema);

module.exports = Order;