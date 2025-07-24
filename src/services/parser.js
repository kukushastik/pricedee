const xlsx = require('xlsx');

function parseExcel(filePath) {
  const workbook = xlsx.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = xlsx.utils.sheet_to_json(sheet);
  return data.map(row => ({
    name: row['Название'],
    model: row['Модель'],
    price: row['Цена'],
    article: row['Артикул']
  }));
}

module.exports = { parseExcel };
