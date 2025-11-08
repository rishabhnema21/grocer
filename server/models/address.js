const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addressSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    street: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    zipcode: {type: Number, required: true},
    country: {type: String, required: true},
    phone: {type: Number, required: true},
    label: {type: String, default: "Home"}
}, { timestamps: true })

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;