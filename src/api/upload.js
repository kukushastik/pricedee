const express = require('express');
const multer = require('multer');
const xlsx = require('xlsx');
const router = express.Router();

const upload = multer({ dest: 'src/uploads/' });

router.post('/', upload.single('file'), (req, res) => {
  const workbook = xlsx.readFile(req.file.path);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = xlsx.utils.sheet_to_json(sheet);
  res.json({ rowsParsed: data.length, preview: data.slice(0, 5) });
});

module.exports = router;
