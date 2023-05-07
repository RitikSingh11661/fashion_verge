const express = require("express");
const cors = require("cors");
const productRoute = require("./routes/productsRoute");
const connection = require("./db");
const userRouter = require("./routes/usersRoute");

require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/products", productRoute);

app.listen(4500, async (req, res) => {
    try {
        await connection;
        console.log("connected to mongoose");
    } catch (e) {
        console.log(e);
    }
    console.log(`Server running in prot 4500`)
})