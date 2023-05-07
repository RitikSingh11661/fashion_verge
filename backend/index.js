const express = require("express");
const cors = require("cors");
const productRoute = require("./routes/productsRoute");
const userRoute = require("./routes/usersRoute");
const connection = require("./db");

require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", userRoute);
app.use("/products", productRoute);

app.listen(process.env.PORT, async (req, res) => {
    try {
        await connection;
        console.log("connected to mongoose");
    } catch (e) {
        console.log(e);
    }
})