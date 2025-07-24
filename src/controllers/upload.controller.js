const xlsx = require('xlsx');
const fs = require('fs');
const { Product, PriceList } = require('../models');

exports.handleUpload = async (req, res) => {
    const workbook = xlsx.readFile(req.file.path);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = xlsx.utils.sheet_to_json(sheet);

    const priceList = await PriceList.create({ userId: req.user.id });

    for (const row of rows) {
        await Product.create({
            name: row['Product Name'],
            price: row['Price'],
            sku: row['SKU'],
            priceListId: priceList.id
        });
    }

    fs.unlinkSync(req.file.path);
    res.json({ message: 'File processed', products: rows.length });
};
