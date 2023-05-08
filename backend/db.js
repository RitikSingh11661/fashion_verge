const mongoose = require("mongoose");
require("dotenv").config();

const conection = mongoose.connect('mongodb+srv://anji:kommu@cluster0.dxyi0uo.mongodb.net/FashionVerge?retryWrites=true&w=majority');

module.exports = conection
