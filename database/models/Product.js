module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
    
          name: {
            type: DataTypes.STRING(200),
            allowNull: false
          },
    
          description: {
            type: DataTypes.STRING(400),
            allowNull: false
          },
        
          image: {
            type: DataTypes.TEXT,
            allowNull: false
          },
    
          active: {
            type: DataTypes.TINYINT(1),
            allowNull: false
          },
    
          price: {
            type: DataTypes.FLOAT,
            allowNull: false
          },
    
          categoryId: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            foreignKey: true,
            field: 'category_id'
          }
    },
    {
        tableName: 'products',
        timestamps: false
    })

    Product.associate = (models => {
        Product.belongsTo(models.Category, {
            foreignKey: 'categoryId',
            as: 'category'
        })

        Product.belongsToMany(models.User, {
          foreignKey: 'productId',
          otherKey: 'userId',
          through: models.UserHasProduct
        })
        Product.hasMany(models.UserHasProduct,{
          foreignKey: 'productId',
          as: 'buys'
        })

    })

    return Product
}