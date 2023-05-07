const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    image: { type: [String], required: true },
    price: { type: Number, required: true },
    title: { type: String, required: true },
    rating: { type: Number, required: true },
    description: { type: Number, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    productID: { type: String, required: true },
})

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;
