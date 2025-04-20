const express = require('express');
const router = express.Router();
const Product = require('../models/products');

//get all products
router.get('/', async (req, res) => {
    try{
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error'});
    }
});

//get one product by id
router.get('/:id', getProducts, (req, res) => {
    res.json(res.products);
});

router.post('/', async(req, res) => {
    const products = req.body;

    if(!Array.isArray(products)){
        const product = new Product({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category,
            imageUrl: req.body.imageUrl
        });
        try{
            const newProduct = await product.save();
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(400).json({ message: error.message + ' bad data'});
        };
    } else {
        try{
            const savedProducts = await Product.insertMany(products);
        res.status(201).json(savedProducts);
        } catch (error) {
            res.status(400).json({ message: error.message + 'bad data'});
        }
    }
    // const product = new Product({
    //     name: req.body.name,
    //     price: req.body.price,
    //     description: req.body.description,
    //     category: req.body.category,
    //     imageUrl: req.body.imageUrl
    // });

    // try{
    //     const newProduct = await product.save();
    //     res.status(201).json(newProduct);
    // } catch (error) {
    //     res.status(400).json({ message: error.message + ' bad data'});
    // };
});

router.put('/:id', getProducts, async (req,res) => {
    if(req.body.name != null){
        res.products.name = req.body.name;
    };
    if(req.body.price != null){
        res.products.price = req.body.price;
    };
    if(req.body.description != null){
        res.products.description = req.body.description;
    };
    if(req.body.category != null){
        res.products.category = req.body.category;
    };
    if(req.body.imageUrl != null){
        res.products.imageUrl = req.body.imageUrl;
    };

    try{
        const updatedProduct = await res.products.save();
        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message});
    };
});

router.delete('/:id', getProducts, async (req, res) =>{
    try{
        await res.products.deleteOne();
        res.json({message: 'product deleted'});
    } catch (error) {
        res.status(500).json({ message: 'internal server error'});
    };
});



//middleware function to get product by id
async function getProducts(req, res, next) {
    let products;

    try{
        products = await Product.findById(req.params.id);
        if(products == null){
            return res.status(404).json({ message: 'cannot find product with this id'});
        }
    } catch (error) {
        return res.status(500).json({ message: error.message});
    }

    res.products = products;
    next();
};

module.exports = router;