const axios = require('axios');
const cheerio = require('cheerio');
const Product = require('./product');

const scrapeProducts = async () => {
    const { data } = await axios.get('https://example-ecommerce-website.com/products');
    const $ = cheerio.load(data);
    const products = [];

    $('.product-item').each((index, element) => {
        const name = $(element).find('.product-name').text();
        const price = $(element).find('.product-price').text();
        const rating = $(element).find('.product-rating').text();

        products.push({ name, price, rating });
    });

    await Product.insertMany(products);
    console.log('Products scraped and saved to database');
};

module.exports = scrapeProducts;