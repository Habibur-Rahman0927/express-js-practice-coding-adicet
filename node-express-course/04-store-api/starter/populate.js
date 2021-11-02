require('dotenv').config()

const conncetDB = require('./db/connect');
const Product = require('./models/product');

const jsonProducts = require('./products.json')

const start = async () => {
    try {
        await conncetDB(process.env.MONGO_URI)
        await Product.deleteMany()
        await Product.create(jsonProducts);
        console.log('success !!')
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start();