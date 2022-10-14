module.exports = (sequelize, DataTypes) => {
    const UserHasProduct = sequelize.define('UserHasProduct', {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
          userId: {
            type: DataTypes.INTEGER(10),
            foreignKey: true,
            allowNull: false,
            field: 'user_id'
          },
          productId: {
            type: DataTypes.INTEGER(10),
            foreignKey: true,
            allowNull: false,
            field: 'product_id'
          },
          hashBuy: {
            type: DataTypes.STRING(500),
            allowNull: false
          }  
    },
    {
        tableName: 'users_has_products',
        timestamps: false
    })

    UserHasProduct.associate = (models) => {
      UserHasProduct.belongsTo(models.Product, {
        foreignKey: 'productId',
        as: 'product'
      })
      UserHasProduct.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      })
    }

    return UserHasProduct
}