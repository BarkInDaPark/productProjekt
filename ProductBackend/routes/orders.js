const express = require('express');
const router = express.Router();
const Order = require('../models/orders');

// Get all orders
router.get('/', async (req, res) =>{
    try{
        const orders = await Order.find();
        res.json(orders);
    } catch(error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error'})
    }
});
//post 
router.post('/', async(req, res) =>  {
    order = req.body;

    try{
        const savedOrder = await Order.create(order);
        res.status(201).json({
            message: 'order created',
            orderId: savedOrder._id,
        })
    } catch (error) {
        res.status(400).json({message: error.message + 'bad data'})
    }
})

module.exports = router;
