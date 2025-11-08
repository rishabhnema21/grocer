const Address = require("../models/address");

// add address: /api/address/add
const addAddress = async (req, res) => {
    try {
        const userId = req.user.id;
        const { address } = req.body;
        await Address.create({...address, userId});
        res.json({success: true, message: "Address added succesfully"});
    } catch(error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }
}

// get addresses: /api/address/all
const getAddress = async (req, res) => {
    try {  
        const userId = req.user.id;
        const address = await Address.find({userId});
        res.json({success: true, address});
    } catch(error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }
}

module.exports = { addAddress, getAddress }