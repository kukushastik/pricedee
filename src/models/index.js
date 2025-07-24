const { Sequelize, DataTypes } = require('sequelize');
const fs = require('fs');
const path = require('path');
const sequelize = new Sequelize(process.env.DATABASE_URL, { dialect: 'postgres' });

const db = {};
fs.readdirSync(__dirname)
  .filter(file => file !== 'index.js')
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
module.exports = db;
