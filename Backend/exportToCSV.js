const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const Product = require('./product');

const exportToCSV = async () => {
    const products = await Product.find();
    const csvWriter = createCsvWriter({
        path: 'products.csv',
        header: [
            { id: 'name', title: 'Name' },
            { id: 'price', title: 'Price' },
            { id: 'rating', title: 'Rating' },
        ],
    });

    await csvWriter.writeRecords(products);
    console.log('Data exported to products.csv');
};

module.exports = exportToCSV;