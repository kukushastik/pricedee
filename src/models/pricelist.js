module.exports = (sequelize, DataTypes) => {
    const PriceList = sequelize.define('PriceList', {
        uploadedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    });

    PriceList.associate = (models) => {
        PriceList.belongsTo(models.User, { foreignKey: 'userId' });
        PriceList.hasMany(models.Product, { foreignKey: 'priceListId' });
    };

    return PriceList;
};
