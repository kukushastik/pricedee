module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        name: DataTypes.STRING,
        price: DataTypes.FLOAT,
        sku: DataTypes.STRING
    });

    Product.associate = (models) => {
        Product.belongsTo(models.PriceList, { foreignKey: 'priceListId' });
    };

    return Product;
};
