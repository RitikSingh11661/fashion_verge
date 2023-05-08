const express = require("express");
const ProductModel = require("../models/productModel");

const productRoute = express.Router();

productRoute.post("/add", async (req, res) => {
    try {
        const { role } = req.body;
        if (role === 'admin') {
            const newProduct = new ProductModel({ adminID: req.body.adminID, ...req.body });
            await newProduct.save();
            res.status(200).send({ msg: "new product added" })
        } else {
            res.status(400).send({ msg: "You are not authorized" })

        }

    } catch (e) {
        console.log(e);
        res.status(400).send({ err: e.message });
    }
})

productRoute.get("/", async (req, res) => {
    const searchQuery = req.query?.q;
    const sortCriteria = req.query?.sort;
    const filterCriteria = req.query?.filter;
    const page = +req.query?.page || 1;
    const limit = +req.query?.limit || 10;
    const skip = (page - 1) * limit;
    try {
        let data;

        if (sortCriteria) {
            let arr = sortCriteria.split(":");
            let obj = {};
            obj[arr[0]] = arr[1];
            data = data.sort(obj);
        }

        if (filterCriteria && Array.isArray(filterCriteria)) {
            //Checking filtetCriteria is an array or not because if single filter is passed it received as one obj instead of array
            const filterArray = filterCriteria.map((el) => {
                let arr = el.split(":");
                let obj = {};
                obj[arr[0]] = arr[1];
                obj[arr[0]] = { $regex: arr[1], $options: "i" }; //regex is handling small or caps letter

                return obj;
            });
            data = data.or(filterArray);
        } else if (filterCriteria) {
            let obj = {};
            let arr = filterCriteria.split(":");
            obj[arr[0]] = { $regex: arr[1], $options: "i" };

            data = data.or([obj]);
        }

        if (searchQuery) {
            data = await ProductModel.find({ title: { $regex: searchQuery, $options: "i" } })
        }

        const total = await ProductModel.countDocuments(data);
        const totalPages = Math.ceil(total / limit);
        const productData = await ProductModel.find();

        res.status(200).send({ page, totalPages, limit, data: productData })

    } catch (e) {
        console.log(e);
        res.status(400).send({ err: e.message });
    }
})

productRoute.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = await ProductModel.findOne({ _id: id });
        res.status(200).send(data);
    } catch (e) {
        console.log(e);
        res.status(400).send({ err: e.message });
    }
})

productRoute.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await ProductModel.findByIdAndDelete({ _id: id });
        res.send("Deleted Successfully");
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = productRoute;
