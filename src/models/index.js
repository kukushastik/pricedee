const { Sequelize } = require('sequelize');
const ProductModel = require('./product');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false
});

const Product = ProductModel(sequelize);

module.exports = { sequelize, Product };
