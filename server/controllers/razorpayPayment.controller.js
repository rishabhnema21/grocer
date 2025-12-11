const Razorpay = require("razorpay");
const Order = require("../models/order");
const Product = require("../models/product");
const crypto = require("crypto");

// console.log("API KEY: ",process.env.RAZORPAY_API_KEY);
// console.log("API SECRET: ",process.env.RAZORPAY_API_SECRET);

const razorpay_api_key = process.env.RAZORPAY_API_KEY;
const razorpay_api_secret = process.env.RAZORPAY_API_SECRET;

const razorpay = new Razorpay({
    key_id: razorpay_api_key,
    key_secret: razorpay_api_secret,
})

const createRazorpayOrder = async (req, res) => {
    try {
        const userId = req.user.id;
        const { items, addressId } = req.body;

        if (!items || !items.length) {
            return res.json({ success: false, message: "No Items" });
        }
        if (!addressId) {
            return res.json({ success: false, message: "No Address Selected" });
        }

        let totalAmount = 0;
        for (const item of items) {
            const product = await Product.findById(item.productId);
            totalAmount += product.offerPrice * item.quantity;
        }

        totalAmount += Math.floor(totalAmount * 0.02);

        const options = {
            amount: totalAmount*100,
            currency: "INR",
            receipt: "order_"+ Date.now(),
        }

        const order = await razorpay.orders.create(options);
        res.json({ success: true,  razorpayOrderId: order.id, amount: totalAmount});

    } catch(err) {
        res.json({ success: false, message: err.message });
    }
}

const verifyRazorpayPayment = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, items, addressId } = req.body;

        const sign = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSign = crypto
            .createHmac("sha256", razorpay_api_secret)
            .update(sign)
            .digest("hex");

        if (expectedSign !== razorpay_signature) {
            return res.json({ success: false, message: "Invalid signature" });
        }

        let totalAmount = 0;
        for (const item of items) {
            const product = await Product.findById(item.productId);
            totalAmount += product.offerPrice * item.quantity;
        }

        totalAmount += Math.floor(totalAmount * 0.02);

        await Order.create({
            userId,
            items,
            totalAmount,
            addressId,
            paymentType: "Online",
            paymentId: razorpay_payment_id,
            orderId: razorpay_order_id,
        })

        res.json({ success: true, message: "Payment Verified & Order Saved in DB" });

    } catch (err) {
        res.json({ success: false, message: err.message });
    }
}

module.exports = { createRazorpayOrder, verifyRazorpayPayment };