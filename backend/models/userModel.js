const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    city: { type: String, required: true},
    role: {type: String, required: true}
})

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
