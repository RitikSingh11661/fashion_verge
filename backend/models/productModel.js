const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    image: { type: String, required: true },
    price: { type: Number, required: true },
    name: { type: String, required: true },
    discount: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    oprice: { type: Number, required: true },
    subhead: { type: String, required: true },
})

const ProductModel = mongoose.model("product", productSchema);

module.exports = ProductModel;
