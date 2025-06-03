const mongoose = require('mongoose');
const products = require('./products');

const orderSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        require: true,
    },
    city:{
        type: String,
        required: true,
    },
    postalCode:{
        type: String,
        required: true,
    },
    country:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    cardName:{
        type: String,
        required: true,
    },
    cardNumber:{
        type: String,
        required: true,
    },
    cardExp:{
        type: String,
        required: true,
    },
    cardCcv:{
        type: String,
        required: true,
    },
    products: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'products',
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            min: 1
        }
    }],
    totalPrice: {
        type: Number,
        required: true,
        min: 0
    },

});

module.exports = mongoose.model('orders', orderSchema);