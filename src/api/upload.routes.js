const express = require('express');
const multer = require('multer');
const path = require('path');
const { parseExcel } = require('../services/parser');
const { Product } = require('../models');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('file'), async (req, res) => {
  const products = await parseExcel(req.file.path);
  await Product.bulkCreate(products);
  res.json({ success: true, count: products.length });
});

module.exports = router;
