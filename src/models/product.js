const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Product', {
    name: DataTypes.STRING,
    model: DataTypes.STRING,
    price: DataTypes.FLOAT,
    article: DataTypes.STRING
  });
};
