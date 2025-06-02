const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const mongooseURL = 'mongodb://localhost/Products';
const PORT = 3000;

mongoose.connect(mongooseURL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connected to database'));

app.use(express.json());
app.use(cors());

const productRouter = require('./routes/products');
const orderRouter = require('./routes/orders');
app.use('/api/orders', orderRouter);
app.use('/api/products', productRouter);

app.listen(PORT, () => console.log(`server is running at port: ${PORT}`));